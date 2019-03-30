var path = require("path");

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
<<<<<<< HEAD
  app.get("/newUser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newUser.html"));
  });
  app.get("/signIn", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signIn.html"));
  });
  // If no matching route is found default to home
=======

>>>>>>> df51283881d27f98ae9a79468c6e4eae7fa2fee4
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/visitor.html"));
  });
};
