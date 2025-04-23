const express= require('express')
const captainController= require('../controllers/captain.controller')
const router= express.Router()
const authMiddleware= require('../middleware/auth.middleware')

const {body}= require('express-validator');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 4 }).withMessage('first name must be contain atleast 4 char'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage('last name must be contain atleast 3 char'),
    body('password').isLength({ min: 6 }).withMessage('password must be contain atleast 6 character'),
    body('vehical.color').isLength({ min: 3 }).withMessage('color must be atleast 3 char'),
    body('vehical.plate').isLength({ min: 3 }).withMessage('plate must be atleast 3 char'),
    body('vehical.capacity').isInt({ min: 1 }).withMessage('capacity must be atleast 1 person'),
    body('vehical.vehicaltype').toLowerCase().isIn(['car', 'motorcycle', 'bike']).withMessage('Invalid vehical'),
  ], captainController.registerCaptain);
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min : 6}).withMessage('password must be atlest 6 character')
],
 captainController.loginCaptain

)

router.get('/profile',authMiddleware.authCaptain, captainController.getCaptainProfile)
router.get('/logout', authMiddleware.authCaptain,captainController.logoutCaptain)
module.exports= router;

