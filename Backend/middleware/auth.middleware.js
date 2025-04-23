const userModel = require('../models/users.model');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require("../models/blacklistToken.model");
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const isBlacklisted = await userModel.findOne({ Tokens: token });
    if (isBlacklisted) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    return next();
  } catch (err) {
    console.error('Auth error:', err.message);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ Tokens: token });
    if (isBlacklisted) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);

    if (!captain) {
      return res.status(401).json({ message: 'Captain not found' });
    }

    req.captain = captain;
    return next();
  } catch (err) {
    console.error('Captain auth error:', err.message);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};