var express = require("express"),
    app     = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground");
    
    
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser : true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");



/*
Campground.create(
               {
                 name:"Silver Springs", 
                   image: "https://farm8.staticflickr.com/7368/9811937955_03d073d6ef.jpg",
                   description :"Formerly the site of a vast Silver mine that was depelted in 1892!"
                   
                }, function(err, campground){
                       if(err){
                           console.log(err);
                       } else {
                           console.log(campground);
                       }
                   });
*/
app.get("/", function(req,res){
    res.render("landing");
});

//INDEX Route
app.get("/campgrounds", function(req,res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index",{campgrounds:allCampgrounds});
        }
    });
    
});
//CREATE Route
app.post("/campgrounds",function(req,res){
    //get data from form and add to campground arrary
    var name =req.body.name;
    var image =req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image:image, description: description};
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
app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs")
});
//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //Find campground with provided ID then render template!
    Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           console.log(err);
       } else{
        //render show template with that campground
        res.render("show", {campground: foundCampground});
       }
    });
   
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCampServer is up!");
});