const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://kai821104:kai7717805@cluster0.gwcjt.mongodb.net/todolistDB", {useNewUrlParser:true, useUnifiedTopology: true });

const app = express();
const today = new Date()
const currentDay = today.getDay()
app.set('view engine', 'ejs');

const itemSchema = new mongoose.Schema({
    name :String,
    status:String
}) 

const Item = mongoose.model("Item", itemSchema);
const item1 = new Item ({
    name : "finish bootcamp"
});
const item2 = new Item ({
    name : "Welcome"
});
const item3 = new Item ({
    name : "hit the plus button to add new item"
});

// below is to add those default items into db
// const defaultItems = [item1, item2, item3]
// Item.insertMany(defaultItems, function(err){
//     if(err){
//         console.log(err);
//     }else {
//         console.log("successfully add new items")
//     }
// })

const Items = [];
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
    Item.find({}, function(err, foundItems){
        console.log(foundItems)
        res.render("list", {listTitle :day, Item:foundItems})
    })   
}); 

app.post("/", function(req, res){
    console.log(req.body)
    let itemName = req.body.newlist;
    const newItem = new Item({
        name : itemName
    });
    Item.insertMany(newItem)
    res.redirect("/")
});

app.post("/delete", function(req, res){
    console.log(req.body.delete);
    Item.findByIdAndDelete(req.body.delete, function(err){
        if(err){console.log(err)
        } else {console.log("successful deletion")
        };
     })
     res.redirect("/")
});
  
    

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List", Item: workItems});
});
app.post("/work",function(req,res){
    
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})

let port = process.env.PORT;    
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);