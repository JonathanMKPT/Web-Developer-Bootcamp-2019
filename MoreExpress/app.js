var  express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs")

//homepage
app.get('/', function(req, res){
   res.render("home");
});

// fallinlovewith/science
app.get('/fallinlovewith/:thing', function(req, res){
   var thing = req.params.thing;
   res.render("love", {thingVar : thing});
});
//posts route
app.get('/posts', function(req, res){
   var posts = [
         {title: "Shit racist still believe", author : "Malcom_Z"},
         {title: "How to become a black freelancer in 2019", author : "thisD4nk4U"},
         {title: "I'm a black AI technician, AMA", author : "TyganXcUm2"},
      ];
      
      res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is listening"); 
});