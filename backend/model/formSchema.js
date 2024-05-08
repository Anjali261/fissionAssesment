
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  contactNumber: { type: String, required: true },
});

module.exports = mongoose.model('Form', formSchema);