const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const auth = require('./auth/routes/routes')
const roles =require('./Roles/routes/roles')
const menu = require('./menu/routes/menu')
const user = require('./users/Routes/user')
var db = require('./db')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', auth)
app.use('/roles',roles)
app.use('/menu',menu)
app.use('/users',user)
// module.exports = app;
const port = 4000;
db.connect(() => {
    app.listen(port, function () {

        console.log('Server listening on port ' + port);
    });
})