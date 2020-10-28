var express = require("express");
const path = require("path");
const data = require("./js/data");
var app = express();

const HTTP_PORT = process.env.HTTP_PORT || 8080;

//welcome message
function onHTTPSTART(){
console.log("Express HTTP server listening on: " + HTTP_PORT);
}

//set up route to my default page
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"));
});

//set up route to my registration page
app.get("/registration",(req,res)=>{
    res.sendFile(path.join(__dirname,"/registration.html"))
});

app.use((req,res)=>{
    res.status(404).send("Page does not exist.");
});

app.listen(HTTP_PORT,onHTTPSTART);