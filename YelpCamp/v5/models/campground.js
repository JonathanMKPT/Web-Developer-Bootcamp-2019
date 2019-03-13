
var mongoose = require("mongoose");
//Schema Setup
var campgroudSchema = new mongoose.Schema({
    name : String,
    image : String,
    description : String,
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    
    ]
});


module.exports = mongoose.model("Campground", campgroudSchema);