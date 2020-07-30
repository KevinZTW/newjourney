const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express();
const today = new Date()
const currentDay = today.getDay()
app.set('view engine', 'ejs');



let workItems=[];



var options = {
    weekday: "long",
    day : "numeric",
    month :"long"
}
var day = today.toLocaleDateString("en-US", options)
switch(currentDay){
    
    case 0:
        var dayname = "Sunda";
        break;
    case 1:
        var dayname = "Monday";
        break;
    case 2:
        var dayname = "Tueswesy";
        break;}


app.use(bodyParser.urlencoded({extneded:true}));
app.use(express.static("public"))



app.get("/", function(req, res){
   res.render("list", {listTitle :day, Item:Items});
   
}); 

app.post("/", function(req, res){
    let item = req.body.newlist
    if (req.body.Add==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
    Items.push(item)   
    res.redirect("/");
}});

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List", Item: workItems});
});
app.post("/work",function(req,res){
    
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})

app.listen(3000);