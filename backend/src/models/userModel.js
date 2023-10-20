// const mongoose = require('mongoose');
const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
  name: String,
  age: Number,
});


module.exports = model('User', UserSchema);