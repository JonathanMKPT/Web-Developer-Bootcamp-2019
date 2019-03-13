var express = require('express');

var app = express();
// '/' => "Hi"
app.get('/', function(req, res){
    console.log("Request sent to /");
    res.send('"Hi there!');
});

// '/' => "Goodbye"
app.get('/bye', function(req,res){
    console.log("Request sent to /bye");
   res.send("Bye!");
});

// '/dog' => "MEOW"
app.get('/dog', function(req,res){
    console.log("Request sent to /dog")
   res.send('MEOW!') 
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("Welcome to the Comments Sewer");
});

app.get('*', function(req, res){
    res.send("Page not found")
    
});

// Tell Express to listen for requests(start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!")  
});