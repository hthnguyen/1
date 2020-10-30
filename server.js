var express = require("express");
path = require("path");
app = express();



// app.set('port', 8080);
// app.use(express.static(path.join(__dirname, '../public')));
// var server = app.listen(app.get('port'), function(){
//     console.log("The server is running on http://localhost:" + app.get('port'));    
// })

const HTTP_PORT = process.env.HTTP_PORT || 8080;

//welcome message
function onHTTPSTART(){
console.log("Express HTTP server listening on: " + HTTP_PORT);
}

app.use(express.static(path.join(__dirname, '../WEB322')));

//set up route to my default page
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

//set up route to my registration page
app.get("/registration",(req,res)=>{
    res.sendFile(path.join(__dirname,"registration.html"))
});

app.use((req,res)=>{
    res.status(404).send("Page does not exist.");
});

app.listen(HTTP_PORT,onHTTPSTART);