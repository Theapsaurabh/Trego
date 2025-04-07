const express= require('express');
const router = express.Router();
const {body}= require("express-validator")
const userController= require('../controllers/user.controller')


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:4}).withMessage("first name should be contain 4 char"),
    body('fullname.lastname').isLength({min:3}).withMessage("last name should be contain 4 char"),
    body('password').isLength({min:6}).withMessage("password must be contain atleast 6 character")

],
     userController.registerUser
 )

module.exports= router;
