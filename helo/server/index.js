require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      gradient = require('gradient-string'),
      authCtrl = require('./authController'),
      ctrl = require('./controller'),
      { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
      app = express();

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60},
    secret: SESSION_SECRET
}))

massive(CONNECTION_STRING)
    .then(db => {
    app.set('db', db)
    console.log(gradient.retro('DB Cooper is watching'))
})
.catch(err => console.log(gradient.vice(err, `Lost contact with DB Cooper`)));

// Minimum Viable Product

app.post('/api/auth/register', authCtrl.login);
app.post('/api/auth/login', authCtrl.register);
app.post('/api/logout', authCtrl.logout);

// Bonus features

// app.get('/api/posts/:userid');
// app.post('/api/post/:userid');
// app.get('/api/post/:postid');


const port = SERVER_PORT;
app.listen(port, () => console.log(gradient.pastel(`Ready to crush it on ${port}`)));