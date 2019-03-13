var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo2", {useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/user")

Post.create({
    title:"I hate the army pt 3",
    content:"I don`t like being around people"
}, function(err, post){
    User.findOne({email: "liver_failure@hepatitis.ca"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});


/*User.create({
    email: "liver_failure@hepatitis.ca",
    name: "My Liver"
});
*/

User.findOne({email: "liver_failure@hepatitis.ca"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});
