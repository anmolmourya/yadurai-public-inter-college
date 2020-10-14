const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
require('./passport/passport')(passport);


var path = require('path');
app.use(express.static(path.join(__dirname, 'static')));


// body parser
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded ;
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json ;
app.use(bodyParser.json());
app.use(cookieParser());


//app.use('static', express.static('static'));
app.use('static', express.static('views'));
app.use('static', express.static('static'));
//app.use(express.static('static'));
app.set('view engine', 'ejs');



var indexRouter = require('./routes/index');
var facultyRouter = require('./routes/faculty');
var noticeRouter = require('./routes/notice');
var studentsRouter = require('./routes/students');
var teamRouter = require('./routes/team');
var contactRouter = require('./routes/contact');
var authRouter = require('./routes/auth')(passport);
var logoutRouter = require('./routes/logout');
var team_formRouter = require('./routes/team_form');

app.use(session({
    secret : 'thesecret',
    saveUninitialized : false ,
    resave : false
  }));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/faculty', facultyRouter);
app.use('/students', studentsRouter);
app.use('/notice', noticeRouter);
app.use('/team', teamRouter);
app.use('/contact', contactRouter );
app.use('/auth', authRouter );
app.use('/logout', logoutRouter );
app.use('/team_form', team_formRouter );


let port = process.env.PORT;
if (port == null || port == "") {	
    port = 3000;
}


app.listen(port, () => console.log("Example app listening on port 3000!"));