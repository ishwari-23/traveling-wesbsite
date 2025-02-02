const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');

// Get all destinations
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a destination
router.post('/', async (req, res) => {
  const newDestination = new Destination(req.body);
  try {
    await newDestination.save();
    res.status(201).json(newDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
//demo comment