
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

app.get("/dashdoor.html", function(req,res){
    res.sendFile(path.join(__dirname,"dashdoor.html"));
});

app.get("/guide", function(req,res){
    res.send(`<iframe src="https://docs.google.com/document/d/e/2PACX-1vSzfbRxC-O2gscGGUYA7Gf9ic_gOcVQc9q5Pd32BTbUrHh_ZRMe5UcrjZfW0B0LZ6b_uWwES5iEusVt/pub?embedded=true" style="width: 100%; height: 100%; text-align: center;"></iframe>"`);
});

app.use((req,res)=>{
    res.status(404).send("Sorry! Page does not exist");
})
    
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);