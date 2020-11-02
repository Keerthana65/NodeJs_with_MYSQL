const express = require("express");
const router = express.Router();
const db = require("../models");
const cors = require('cors')


// get all students
router.get("/", (req, res) => {
  db.Student.findAll().then(student => res.send(student));
});

// get student by id
router.get("/:id", (req, res) => {
  db.Student.findAll({
    where: {
      id: req.params.id
    }
  }).then(student => res.send(student));
});

// post  student
router.post("/", (req, res) => {
  db.Student.create({
    firstName: req.body.firstName,
    middleName:req.body.middleName,
    lastName:req.body.lastName,
    address:req.body.address,
    dateOfBirth:req.body.dateOfBirth
  }).then(submitedStudent => res.send(submitedStudent));
});

// delete student
router.delete("/:id", (req, res) => {
  db.Student.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send("success"));
});

// edit a student
router.put("/", (req, res) => {
  db.Student.update(
    {
      firstName: req.body.firstName,
      middleName:req.body.middleName,
      lastName:req.body.lastName,
      address:req.body.address,
      dateOfBirth:req.body.dateOfBirth
    },
    {
      where: { id: req.body.id }
    }
  ).then(() => res.send("success"));
});
module.exports = router;
