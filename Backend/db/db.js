const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true // Recommended option
    })
    .then(() => {
        console.log('✅ Connected to MongoDB');
    })
    .catch(err => {
        console.log('❌ DB Connection Error:', err.message);
    });
}

module.exports = connectToDb;