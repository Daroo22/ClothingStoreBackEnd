// models/user.js
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  }
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      delete returnedObject.hashedPassword;
  }
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
