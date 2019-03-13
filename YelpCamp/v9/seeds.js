var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name:"Dread Peak",
        image:"https://images.unsplash.com/photo-1546890975-7596e98cdbf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non tortor id diam laoreet blandit. Maecenas rutrum vehicula neque porta blandit. Phasellus lobortis tristique risus vitae malesuada. Duis non dolor sapien. Proin sed egestas mauris. Vivamus a condimentum nisi. Duis ligula nulla, posuere at sodales ut, eleifend vel leo. Donec egestas metus at tortor aliquet ultricies. Curabitur egestas sollicitudin porta. Proin porttitor ipsum lobortis faucibus tincidunt. Donec vel sapien fringilla, tristique purus sit amet, viverra sem. Ut id porttitor tellus. Curabitur efficitur est massa, ac posuere massa feugiat at. Nam eu viverra nisi, in tempor justo. Nam eleifend nec mi eget tincidunt."
        
    },
     {
        name:"Steel Heights",
        image:"https://images.unsplash.com/photo-1500332988905-1bf2a5733f63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non tortor id diam laoreet blandit. Maecenas rutrum vehicula neque porta blandit. Phasellus lobortis tristique risus vitae malesuada. Duis non dolor sapien. Proin sed egestas mauris. Vivamus a condimentum nisi. Duis ligula nulla, posuere at sodales ut, eleifend vel leo. Donec egestas metus at tortor aliquet ultricies. Curabitur egestas sollicitudin porta. Proin porttitor ipsum lobortis faucibus tincidunt. Donec vel sapien fringilla, tristique purus sit amet, viverra sem. Ut id porttitor tellus. Curabitur efficitur est massa, ac posuere massa feugiat at. Nam eu viverra nisi, in tempor justo. Nam eleifend nec mi eget tincidunt.."
        
    },
     {
        name:"Infinite Sky",
        image:"https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non tortor id diam laoreet blandit. Maecenas rutrum vehicula neque porta blandit. Phasellus lobortis tristique risus vitae malesuada. Duis non dolor sapien. Proin sed egestas mauris. Vivamus a condimentum nisi. Duis ligula nulla, posuere at sodales ut, eleifend vel leo. Donec egestas metus at tortor aliquet ultricies. Curabitur egestas sollicitudin porta. Proin porttitor ipsum lobortis faucibus tincidunt. Donec vel sapien fringilla, tristique purus sit amet, viverra sem. Ut id porttitor tellus. Curabitur efficitur est massa, ac posuere massa feugiat at. Nam eu viverra nisi, in tempor justo. Nam eleifend nec mi eget tincidunt."
        
    }
    ]


function seedDB() {
    //Remove all campgrounds
        Campground.remove({}, function(err){
            if(err){
             console.log(err);
            }
            console.log("removed campgrounds!"); 
             //add a few campgrounds
             data.forEach(function(seed){
                    Campground.create(seed, function(err, campground){
                        if(err){
                             console.log(err);
                        } else {
                            console.log("added campground!");
                            // create comment
                            Comment.create(
                                {
                                    text: "Nature is scary", 
                                    author: "Introvert"
                                    
                                }, function(err, comment){
                                    if(err){
                                        console.log(err);
                                    } else{
                                        campground.comments.push(comment);
                                        campground.save();
                                        console.log("Created new comment");
                                    }
                                   
                                });
                        }
                });
    
            });
        });
        
   
   

}

module.exports = seedDB;
