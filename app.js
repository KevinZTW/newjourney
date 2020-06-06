const express = require("express");
const bodyParser = require("body-parser");

const app = express();



app.use(bodyParser.urlencoded({extneded:true}))

app.get("/", function(req, res){
   res.sendFile(__dirname+"/index.html");
}); 

app.post("/", function(req, res){
    var today =new Date();

    if(today.getDay()===6 || today.getDay()===0){
        res.send("woo, todya is holiday")
    }else{
        res.send("Work harder bro")
    }
    const Get = documents.getElementById(welcome);

})










app.listen(3000);