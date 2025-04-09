
const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    }
}, { timestamps: true });

// Set TTL index to 24 hours (86400 seconds)
blacklistTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const BlacklistToken = mongoose.model('BlacklistToken', blacklistTokenSchema);

module.exports = BlacklistToken;