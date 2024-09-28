const express = require('express');
const app = express();
const path = require("path");

// app starts here!
app.set("views",path.join(__dirname,"View"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'View')));





// request handling starts
app.get("/app",(req,res)=>{
    res.send("Hello");
    res.redirect('/app/home');

});

app.get("/app/home", (req,res)=>{
    res.render('\SignUp');
});

app.post("/app/enter",(req,res)=>{
    res.render('\Login')
});


app.listen(3000,(req,res)=>{
    console.log("server is listening at 3000 port!");
});