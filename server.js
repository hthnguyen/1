
var express = require("express");
path = require("path");
var app = express();

var HTTP_PORT = process.env.PORT || 3000;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static(path.join(__dirname, 'Public')));
// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/index.html", function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/stay-info.html", function(req,res){
    res.sendFile(path.join(__dirname,"stay-info.html"));
});

app.get("/availablity", function(req,res){
    res.sendFile(path.join(__dirname,"stay-info.html"));
});

app.get("/registration.html", function(req,res){
    res.sendFile(path.join(__dirname,"registration.html"));
});

app.use((req,res)=>{
    res.status(404).send("Sorry! Page does not exist");
})
    
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);