

const router = require("express").Router();
const User = require("../models/User.model");

router.get("/users", (req, res, next) => {
  res.json("All good in here");
});


router.post("/users", (req, res, next) => {
  User.create(req.body)
  .then((createdUser) => res.json(createdUser))
  .catch((error) => {
    console.log(error)
    res.json("sorry, contact the support")
  })
});

router.get("/users/:id", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;