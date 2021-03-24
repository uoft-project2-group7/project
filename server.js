// -------- CONSTANTS --------

const express = require("express");
const sequelize = require("./config/connection");
const favicon = require('serve-favicon');
const path = require("path");
const routes = require("./controllers");
const helpers = require("./utils/helpers");  //commented out to run server as not defined at this time

//HANDLEBARS

const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers }); // helpers:  removed from inside brackets to run server as no helpers created

//SESSION

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: "Super secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
const PORT = process.env.PORT || 3001;

// -------- MIDDLEWARE  --------

//SESSION
app.use(session(sess));

// HANDLEBARS
// handlebars set as the default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware function to allow directory to be accessible to client
app.use(express.static(path.join(__dirname, "public")));

// TURN ON ROUTES
app.use(routes);

// TURN ON CONNECTION TO DB AND SERVER
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
