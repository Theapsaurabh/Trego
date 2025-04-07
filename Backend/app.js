const express= require("express");
const app =express();
const dotenv= require('dotenv')
const cors = require('cors');
dotenv.config();
const connectToDb= require('./db/db')
const userRoutes= require('./routes/user.routes.js')


connectToDb(); //
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    console.log("")
})
app.use('/users', userRoutes)


module.exports =app;