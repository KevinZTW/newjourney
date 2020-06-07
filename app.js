const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const today = new Date()
const currentDay = today.getDay()
app.set('view engine', 'ejs');
let Items = ["Buy food", "Cook food"];
let var1 =""



var options = {
    weekday: "long",
    day : "numeric",
    month :"long"
}
var day = today.toLocaleDateString("en-US", options)
switch(currentDay){
    
    case 0:
        var dayname = "Sunday";
        break;
    case 1:
        var dayname = "Monday";
        break;
    case 2:
        var dayname = "Tuesday";
        break;}


app.use(bodyParser.urlencoded({extneded:true}))




app.get("/", function(req, res){
   res.render("list", {kindDay :dayname+day, var1:Items});
   
}); 

app.post("/", function(req, res){
    Item = req.body.newlist
    Items.push(Item)   
    res.redirect("/");
});



app.listen(3000);