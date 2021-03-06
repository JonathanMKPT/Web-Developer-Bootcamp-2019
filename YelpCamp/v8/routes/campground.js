var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");

//INDEX Route
router.get("/", function(req,res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index",{campgrounds:allCampgrounds});
        }
    });
    
});
//CREATE Route
router.post("/",function(req,res){
    //get data from form and add to campground arrary
    var name =req.body.name;
    var image =req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image:image, description: desc};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
        //redirect back to campgrounds page
        res.redirect("/campgrounds");
       }
    });
  
});
//NEW Routes

router.get("/new",function(req,res){
    res.render("campgrounds/new");
});
//SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    //Find campground with provided ID then render template!
    Campground.findById(req.params.id).populate("comments").exec (function(err, foundCampground){
       if(err){
           console.log(err);
       } else{
        //render show template with that campground
        console.log(foundCampground);
        res.render("campgrounds/show", {campground: foundCampground});
       }
    });
   
});

module.exports = router;