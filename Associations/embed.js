var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true});


//POST -title, content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);


// USER -email name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts:[postSchema]
});

var User = mongoose.model("User", userSchema);
/*
var newUser = new User({
    email: "saeba_ryo@city_hunter.jp",
    name: "Ryo Saeba"
});

newUser.posts.push({
    title:"3 decades of Mokkori, by a connesieur",
    content: "Kaori just hits me with a hammer :("
});

newUser.save(function(err,user){
   if(err){
       console.log("ERROR!")
       
   } else {
       console.log(user);
       
   }
    
    
});*/

/*var newUser = new User({
    email: "dank_buddz@420.edu",
    name: "Jeremy Thomas"
});

*/

/*var newPost = new Post({
    title: "My review of Romulan weed!",
    content: "It's like they're illogical vulcans man....weird!"
});


newPost.save(function(err, post){
    if(err){
        console.log("ERROR!");
    } else {
        console.log(post);
    }
});*/


User.findOne({name:"Jeremy Thomas"}, function(err, user){
    if(err){
        //console.log("ERROR!");
    } else {
        user.posts.push({
            title: "I'm a chef by day",
            content: "And no, any idiot could not do my job..."
        });
        user.save(function(err, user){
            if(err){
                console.log("ERROR!");
            } else {
                console.log(user);
            }
        });
    }
});