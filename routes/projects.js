var express = require('express');
var router = express.Router();
var project = require("../controllers/ProjectController.js");
// Add all routes to CRUD functions.
// Get all projects
router.get('/', function(req, res) {
    project.list(req, res);
  });
  
  // Get single project by id
  router.get('/show/:id', function(req, res) {
    project.show(req, res);
  });
  
  // Create project
  router.get('/create', function(req, res) {
    project.create(req, res);
  });
  
  // Save project
  router.post('/save', function(req, res) {
    project.save(req, res);
  });
  
  // Edit project
  router.get('/edit/:id', function(req, res) {
    member.edit(req, res);
  });
  
  // Edit update
  router.post('/update/:id', function(req, res) {
    member.update(req, res);
  });
  
  // Edit update
  router.post('/delete/:id', function(req, res, next) {
    member.delete(req, res);
  });
module.exports = router;