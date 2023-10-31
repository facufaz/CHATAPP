const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
     name: {type: String, required: true, minlenght: 3, maxlenght: 30},
     email: {type: String, require: true, unique: true, minlenght: 3, maxlenght: 220},
     password: {type: String, require: true, minlenght: 6, maxlenght: 1024},
    },
    {
        timestamps: true,
    }
);

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;