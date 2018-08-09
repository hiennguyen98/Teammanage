var express = require('express');
var router = express.Router();
var member = require("../controllers/MemberController.js");
// Add all routes to CRUD functions.
// Get all members
router.get('/', function(req, res) {
    member.list(req, res);
  });
  
  // Get single member by id
  router.get('/show/:id', function(req, res) {
    member.show(req, res);
  });
  
  // Create member
  router.get('/create', function(req, res) {
    member.create(req, res);
  });
  
  // Save member
  router.post('/save', function(req, res) {
    member.save(req, res);
  });
  
  // Edit member
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