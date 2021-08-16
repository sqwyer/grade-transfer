if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const path = require('path');

const express = require('express');
const session = require('express-session');
const app = express();

const GCI = require('gc.info');
const gci = new GCI();

app.use('/styles', express.static(path.join(__dirname, '/../client/styles')));
app.use('/static', express.static(path.join(__dirname, '/../client/static')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/../client'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/api', require('./api/api'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/help', (req, res) => {
    res.render('help');
});

app.get('/auth', (req, res) => {
    gci.authorize({
        client_secret: process.env.CLIENT_SECRET,
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URI,
        server: { req: req, res: res }
    }, (data) => {
        req.session.courses = data;
        res.redirect('/courses');
    });
});

app.get('/courses', (req, res) => {
    if(req.session.courses) {
        res.render('courses', {
            list: req.session.courses,
            title: "Your courses.",
            description: `You are teaching in ${req.session.courses.length} active course(s).`
        });
    } else res.redirect('/');
});

app.get('/students', (req, res) => {
    if(req.session.courses && req.query.courseId) {
        let course = req.session.courses.find(obj => obj.id === req.query.courseId);
        if(course) {
            let description = `${course.name} has ${course.roster.length} active students.`;
            if(course.roster.length == 0) description = `${course.name} does not have any students.`;
            else if(course.roster.length == 1) description = `${course.name} has 1 student.`;
            res.render('students', {
                list: course.roster,
                title: `${course.name} Students`,
                description: description
            });
        } else res.redirect('/');
    } else res.redirect('/');
})

app.listen(process.env.PORT || 3000, e => {
    if(e) throw e;
    console.log('Server running...');
});
