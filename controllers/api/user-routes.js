const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require('../../utils/auth')

// GET all users: /api/users
router.get("/", withAuth, (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] }, // Hides password data
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get single user: api/users/:id
router.get("/:id", withAuth, (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    // Include statement to be added here for associations to post and comment
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST to create new user: /api/users
router.post("/", withAuth, (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  }).then((dbUserData) => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json(dbUserData);
    });
  });
});

// post route to login
router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }
    // valid password returns true or false
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    req.session.save(() => {
      //declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username; // was changed from user_id
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

//Logout Route
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
