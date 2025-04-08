const userModel = require('../models/users.model');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
  try {
    // Get token from either cookie or header
    const token= req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Debug: log token
    //console.log('Token:', token);

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Debug: log decoded payload
   // console.log('Decoded:', decoded);

    // Find user by ID in token payload
    const user = await userModel.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Attach user to req object
    req.user = user;
   return  next();
  } catch (err) {
    console.error('Auth error:', err.message);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};