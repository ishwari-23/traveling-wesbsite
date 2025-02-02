// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let bookings = [];

app.post('/api/bookings', (req, res) => {
  const newBooking = {
    _id: Date.now().toString(),
    ...req.body,
    __v: 0
  };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});




