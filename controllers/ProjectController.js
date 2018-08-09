var mongoose = require("mongoose");
var Project= require("../models/Project");
var projectcontroller = {};
// Show  project detail.
projectcontroller.list = function(req, res) {
  Project.find({}).exec(function (err, projects) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/projects/index.ejs", {projects: projects});
    }
  });
};
//Show single project by id function.
projectcontroller.show = function(req,res){
  Project.findOne({_id: req.params.id}).exec(function(err,member) {
      if(err){
          console.log("Error:",err);
      }
      else{
          res.render("../views/projects/show",{member: member});
      }
  });
};
// Add project
projectcontroller.create = function(req, res) {
  res.render("../views/projects/create");
};
//add save new project function
projectcontroller.save = function(req, res) {
  var project = new Project(req.body);

  project.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/projects/create");
    } else {
      console.log("Successfully created a project.");
      res.redirect("/projects/show/"+member._id);
    }
  });
};
//Edit a project
projectcontroller.edit = function(req, res) {
  Project.findOne({_id: req.params.id}).exec(function (err, member) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/projects/edit", {member: member});
    }
  });
};
// Update a project
projectcontroller.update = function(req, res) {
  Project.findByIdAndUpdate(req.params.id, { $set: { nameproject: req.body.nameproject, listmember: req.body.listmember }}, { new: true }, function (err, project) {
    if (err) {
      console.log(err);
      res.render("../views/projects/edit", {project: req.body});
    }
    res.redirect("/projects/show/"+project._id);
  });
};
// Delete a project
projectcontroller.delete = function(req, res) {
  Project.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Project deleted!");
      res.redirect("/projects");
    }
  });
};
// export member controller as a module.
module.exports = projectcontroller;