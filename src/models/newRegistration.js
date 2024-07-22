const mongoose = require('mongoose');

const studentsRecordSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number },
  address: { type: String }
});

module.exports = mongoose.model('newRegistration', studentsRecordSchema);