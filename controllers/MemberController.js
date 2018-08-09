var mongoose = require("mongoose");
var Member= require("../models/Member");
var memberController = {};
// Show list of members.
memberController.list = function(req, res) {
    Member.find({}).exec(function (err, members) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/members/index.ejs", {members: members});
      }
    });
  };
//Show single member by id function.
memberController.show = function(req,res){
    Member.findOne({_id: req.params.id}).exec(function(err,member) {
        if(err){
            console.log("Error:",err);
        }
        else{
            res.render("../views/members/show",{member: member});
        }
    });
};
// Add member
memberController.create = function(req, res) {
    res.render("../views/members/create");
  };
//add save new member function
memberController.save = function(req, res) {
    var member = new Member(req.body);
  
    member.save(function(err) {
      if(err) {
        console.log(err);
        res.render("../views/members/create");
      } else {
        console.log("Successfully created an employee.");
        res.redirect("/members/show/"+member._id);
      }
    });
  };
//Edit a member
memberController.edit = function(req, res) {
    Employee.findOne({_id: req.params.id}).exec(function (err, member) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/members/edit", {member: member});
      }
    });
  };
// Update a member
memberController.update = function(req, res) {
    Member.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, phone: req.body.phone, Idproject:req.body.Idproject }}, { new: true }, function (err, member) {
      if (err) {
        console.log(err);
        res.render("../views/members/edit", {member: req.body});
      }
      res.redirect("/members/show/"+member._id);
    });
  };
// Delete a member
memberController.delete = function(req, res) {
    Member.remove({_id: req.params.id}, function(err) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("Employee deleted!");
        res.redirect("/members");
      }
    });
  };
  // export member controller as a module.
  module.exports = memberController;