const express= require("express");
const app =express();
const dotenv= require('dotenv')
const cors = require('cors');
const cookieParser = require('cookie-parser');
dotenv.config();
const connectToDb= require('./db/db')
const userRoutes= require('./routes/user.routes.js')
const captainRoutes= require('./routes/captain.routes')
app.use(cookieParser());

connectToDb(); //
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    console.log("")
})
app.use('/users', userRoutes)
app.use('/captain', captainRoutes)


module.exports =app;