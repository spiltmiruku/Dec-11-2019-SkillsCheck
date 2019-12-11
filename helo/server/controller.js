module.exports = {
    getPosts: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');
        db.get_posts(id).then(posts => {
            res.status(200).send(posts)
        })
        .catch(err => res.status(500).send(err))
    },
    addPost: (req, res) => {
        console.log(req.params)
        console.log(req.body)
        const {id} = req.params
        const {img} = req.body
        const db = req.app.get('db')
        db.add_post([id, img]).then(result => {
            res.status(200).send(result)
        }).catch(err => res.status(500).send(err))
    },
    deletePost: (req, res) => {
        console.log(req.params)
        const {id, author_id} = req.params
        const db = req.app.get('db')
        db.delete_post([id, author_id]).then(result => {
            res.status(200).send(result)
        })
        .catch(err => res.status(500).send(err))
    },



};