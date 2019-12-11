const bcrypt = require('bcryptjs');

module.exports = {
    login: async(req, res) => {
        console.log(req);
        const { username, password } = req.body;
        const { session } = req;
        const db = req.app.get('db');

        let user = await db.check_user(username)
    }
}