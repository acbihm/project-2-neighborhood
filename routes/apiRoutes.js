var db = require("../models");
var app = require("../server");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Examples.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Examples.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/answer", function (req, res) {
    db.answers.findAll({}).then(function(dbAnswer) {
      res.json(dbAnswer);
    });
  });

  app.get("/api/answer/:user_name", function(req, res) {
    if (req.params.user_name) {
      console.log(db.answers[1]);
      db.answers
        .findOne({
          where: {
            user_name: req.params.user_name
          }
        })
        .then(function(dbAnswer) {
          return res.json(dbAnswer);
        });
    }
  });

  app.post("/api/answer", function(req, res) {
    console.log(req.body);
    db.answers
      .create({
        user_name: req.body.user_name,
        zip_code: req.body.zip_code,
        person_type: req.body.person_type,
        answer: req.body.answer,
        questionID: req.body.questionID
      })
      .then(function(dbAnswer) {
        res.json(dbAnswer);
      });
  });

  // app.post("/api/answer", function (req, res) {
  //   var ans = req.body;
  //   res.json(ans);
  //   // db.answers.create({
  //   //   user_name: ans.user_name,
  //   //   zip_code: ans.zip_code,
  //   //   answer: ans.answer,
  //   //   questionId: ans.questionId
  //   // }).then(function (dbAnswer) {
  //   //   res.json(dbAnswer);
  //   // });
  //   // res.status(204).end();
  // });

  // app.post('/api/answer', function (req, res) {
  //   db.answers.create(req.body).then(function (dbAnswer) {
  //     res.json(dbAnswer);
  //   });
  //   // console.log(req.body);
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   db.Examples.destroy({ where: { id: req.params.id } }).then(function (
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
