const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const today = new Date()
const currentDay = today.getDay()
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extneded:true}))

app.get("/", function(req, res){
   res.sendFile(__dirname+"/index.html");
}); 

app.post("/", function(req, res){
    console.log(currentDay);
    switch(currentDay){
    
        case 0:
            var dayname = "Sunday";
            break;
        case 1:
            var dayname = "Monday";
            break;
        case 2:
            var dayname = "Tuesday";
            break;
    
    }
   
    res.render("list", {kindDay :dayname});
});



app.listen(3000);