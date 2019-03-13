var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    seedDB     = require("./seeds");

    
    
   
mongoose.connect("mongodb://localhost:27017/yelp_camp_v4", {useNewUrlParser : true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
seedDB(); 


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
            res.render("campgrounds/index",{campgrounds:allCampgrounds});
        }
    });
    
});


//CREATE Route
app.post("/campgrounds",function(req,res){
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
app.get("/campgrounds/new",function(req,res){
    res.render("campgrounds/new");
});
//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
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

//============================
//COMMENTS ROUTES
//===========================

app.get("/campgrounds/:id/comments/new", function(req, res){
    //find Campground By ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
    
});

app.post("/campgrounds/:id/comments", function(req, res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    });
   
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCampServer is up!");
});