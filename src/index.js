const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 4000;
const route = require('./routes');
const database = require('./config/database');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
require('dotenv').config();
//connect  to database
database.connect();

// create static file
app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));
// Template  engine
const hbs = handlebars.create({
  // change đuôi file
  extname: ".hbs",
  helpers: {
    sum: (a,b) => a + b,
  },
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
// middleware for take value form data of method post
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'));
// local host ---- hosting

// Action ---> Dispatcher ---> Function Handler(controller)

//  Route init
route(app);

// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.get("/news", (req, res) => {
//   res.render('news');
// });

// app.get("/search", (req, res) => {
//   // queries parameter
//   // console.log(req.query.q);
//   res.render("search");
// });
// // method post for form
// app.post("/search", (req, res) => {
//   // data form
//   console.log(req.body);
//   // res.render("search");
//   res.send('');
// });

// app.listen(port, () =>
//   console.log(`Example app listening on port http://localhost:${port}`)
// );
if (!module.parent) {
    app.listen(port, () =>
        console.log(` app listening on port http://localhost:${port}`)
    );
}
