const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("home.ejs",{port});
});

app.get("/home",(req,res)=>{
    res.render("home.ejs",{port});
});

app.get("/home/administration",(req,res)=>{
    res.render("administration.ejs");
});

app.get("/home/user",(req,res)=>{
    res.render("user.ejs");
});

app.get("/home/user/signup",(req,res)=>{
    res.render("signup.ejs",{port});
});

app.get("/home/administration/signup",(req,res)=>{
    res.render("signup.ejs",{port});
});

app.listen(port,()=>{
    console.log("port is listenig");
});

