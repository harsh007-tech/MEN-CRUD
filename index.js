const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const UserRoutes = require("./routes/user.route");
require('dotenv').config();
const app = express();

//Middleware to allow JSON
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/user",UserRoutes)

//default
app.get('/',(req,res)=>res.send("Welcome to this CRUD MEN!"));

//db connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
.then(()=>
    {
        console.log('Connected to mongo db');
        app.listen(3000,()=>console.log('Server is running on port:3000'));
    })
.catch((error)=>console.log(error));

module.exports = app;