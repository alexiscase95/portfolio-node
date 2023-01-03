const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An person must have a name'],
    unique: true,
  },
  jobRole: {
    type: String,
    required: [true, 'An person must have a job role'],
  },
  location: String,
  email: String,
});
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
