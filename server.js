const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const [requireAuth ,requireAdmin]= require('./app/html/authMiddleware');


app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1800000 }
}));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//pug
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/login', function(req, res) {
  res.render('login');
  console.log(`${req.url}`)
});

app.get('/login-form',requireAuth, function(req, res) {
  res.render('form');
  console.log(`${req.url}`)
});

app.get('/dashboard', requireAuth , requireAdmin, function(req, res) {
  const {  userName } = req.session;
  res.render('dashboard', { userName });
});


app.get('/create', function(req, res) {
  res.render('create');
  console.log(`${req.url}`)
});

app.get('/edit',requireAuth, function(req, res) {
  res.render('edit');
  console.log(`${req.url}`)
});

app.get('/table', function(req, res) {
  res.render('table');
  console.log(`${req.url}`)
});


app.get('/logout',requireAuth, (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});


app.get('/sessionAdmin', (req, res) => {
  const sessionAdmin = req.session.userName === "admin";
  res.json({ sessionAdmin });
});



const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'app/html' directory
app.use(express.static(__dirname + '/app/html'));

// Route for serving the HTML file

app.get('/1log', (req, res) => {
  res.sendFile(__dirname + '/app/html/login.html');
});

app.get('/1employee_dashboard', (req, res) => {
  res.sendFile(__dirname + '/app/html/dashboard.html');
  const sessionId = uuidv4();
});
 
app.get('/1log-forms', (req, res) => {
  res.sendFile(__dirname + '/app/html/form.html');
});

app.get('/1create-new-user', (req, res) => {
  res.sendFile(__dirname + '/app/html/createaccount.html');
});

app.get('/1edit', (req, res) => {
  res.sendFile(__dirname + '/app/html/edit.html');
});

app.get('/1test', (req, res) => {
  res.sendFile(__dirname + '/app/html/test.html');
  console.log(`${req.url}`)
});

// simple route
app.get("/", (req, res) => {
  res.send("KTT EMS");
});
require("./app/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
