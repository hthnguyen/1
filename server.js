var express = require("express");
path = require("path");
app = express();



app.set('port', 8080);
app.use(express.static(path.join(__dirname, '../WEB322')));
var server = app.listen(app.get('port'), function(){
    console.log("The server is running on http://localhost:" + app.get('port'));    
});
