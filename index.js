const express = require('express');
require('./src/database/config');
const newRegistration = require('./src/models/newRegistration');
const app = express();

app.use(express.json());


app.post('/api/students', async (req, res) => {
  const createRecord = new newRegistration(req.body);
  try {
    const student = await createRecord.save();
    res.send(student);
  } catch (err) {
    res.status(500).send({ message: 'Error creating student record' });
  }
});

app.get('/api/students', async (req, res) => {
  try {
    const student = await newRegistration.find();
    res.send(student);
  } catch (err) {
    res.status(500).send({ message: 'Error Getting student record' });
  }
});


app.listen(8000, () => {
  console.log('Server listening on port 8000');
});