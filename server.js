
const express = require("express");
const app = express ();
const path = require ("path");


const {default: mongoose} = require('mongoose');
const User = require('./user_model');

const multer = require ('multer')

const storage = multer.diskStorage({
    destination : (req, file , cb)=>{

        cb(null, 'images')

    },

    filename: (req, file, cb)=>{

        console.log(file);
        cb(null, Date.now()+ path.extname(file.originalname));

    }

});


const upload = multer({storage: storage});

app.set('view engine' , 'ejs');


app.get("/", (req, res )=>{
    res.render("user");
});

app.get("/user", (req, res )=>{
    res.render("user");
});

app.post("/user", upload.single("image"), (req, res)=>{
    res.send("image Uploaded");
});

app.listen(3000);
console.log("server started");


