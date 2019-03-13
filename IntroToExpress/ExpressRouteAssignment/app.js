var express = require("express");
var app = express();

//Visiting /r should print "Hi there, welcome to my assignment"

app.get('/', function(req, res){
   console.log("Request sent to /");
   res.send("Hi there, welcome to my assignment!");
});

//Using the pattern "/speak/animal" Print out "The <animal> says, <sound>!""
app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        cat: "I am your master now...",
        fish: "Blubb!"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
 
   res.send("The " + animal + " says '" + sound + "'");
});
 

//Use the pattern /repat/:word/:timesToPrintout should printout the word multiplied by the number

app.get("/repeat/:message/:times", function(req,res){
   var message = req.params.message;
   var times = Number(req.params.times);
   var result = "";
   
   for(var i =0; i < times; i++){
       result += message + " ";
   }
   res.send(result);
});

app.get('*', function(req, res){
   res.send("Sorry, page not found....What are you doing with your life?!?!?") 
});

//start the server up
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started"); 
});