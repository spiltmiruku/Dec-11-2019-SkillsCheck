const bcrypt = require('bcryptjs');

module.exports = {
    login: async(req, res) => {
        console.log(req);
        const { username, password } = req.body;
        const { session } = req;
        const db = req.app.get('db');

        let user = await db.check_user(username);
        user = user[0];
        if(!user){
            return res.status(400).send('Username not found')
        }
        const authenticated = bcrypt.compareSync(password, user.password);
        if(authenticated){
            delete user.password;
            session.user = user;
            res.status(202).send(session.user);
        } else {
            res.status(401).send('Incorrect Password')
        }
    },
    register: async(req, res) => {
        const { username, password } = req.body;
        const { session } = req;
        const db = req.app.get('db');

        let user = await db.check_user(username);
        user = user[0];
        if(user){
            return res.status(400).send('Username already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user({ username, hash });
        newUser = newUser[0];
        session.user = newUser;
        res.status(201).send(session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.status(200).send('');
        }
    },


};