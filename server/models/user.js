const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
});

/*** Before save callback ***/
const SALT_FACTOR = 10;
userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, function(err, hashedPassword) {
      if (err) { return next(err); }
      user.password = hashedPassword;
      next();
    });
  });
});

/*** Instance methods ***/
userSchema.methods.comparePassword = function(guess, callback) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {
    callback(err, isMatch);
  });
};

const User = mongoose.model('User', userSchema);
module.exports = User;
