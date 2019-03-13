var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name:"Algonquin Park", image: "https://farm2.staticflickr.com/1765/29139779108_94633b0bb9.jpg"},
        {name:"Nippising Grounds", image: "https://farm4.staticflickr.com/3421/3828826250_367d80da41.jpg"},
        {name:"Silver Springs", image: "https://farm8.staticflickr.com/7368/9811937955_03d073d6ef.jpg"},
        {name:"Death Valley", image: "https://pixabay.com/get/ea31b10929f7063ed1584d05fb1d4e97e07ee3d21cac104491f2c371a0e4b0ba_340.jpg"}
];


app.get("/", function(req,res){
    res.render("landing");
});


app.get("/campgrounds", function(req,res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){
    //get data from form and add to campground arrary
    var name =req.body.name;
    var image =req.body.image;
    var newCampground = {name: name, image:image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds")
});

app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCampServer is up!");
});