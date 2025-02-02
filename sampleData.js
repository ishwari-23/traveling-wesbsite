const mongoose = require('mongoose');
const Destination = require('./models/Destination');
const Booking = require('./models/Booking');

const sampleDestinations = [
  {
    name: 'Taj Mahal',
    "_id": "60d0fe4f5311236168a109ca",
    description: 'A historical marvel in Agra, India.',
    image: 'https://i.pinimg.com/736x/85/4d/44/854d44e4ae746d97608172a45920a79c.jpg',
    price: 20
  },
  {
    name: 'Grand Canyon',
    "_id": "60d0fe4f5311236168a109cb",
    description: 'A breathtaking natural wonder in the USA.',
    image: 'https://i.pinimg.com/736x/bc/22/07/bc2207d1c29c3235359a617eecae33fe.jpg',
    price: 50
  },
  {
    name: 'Persepolis',
    "_id": "60d0fe4f5311236168a109cc",
    description: 'The ancient city of Persepolis in Iran.',
    image: 'https://i.pinimg.com/736x/f8/1d/74/f81d744fc3d1c961f9d90379d0d68d87.jpg',
    price: 30
  },
  {
    name: 'Istanbul',
    "_id": "60d0fe4f5311236168a109cd",
    description: 'Explore the rich culture and history of Istanbul, Turkey.',
    image: 'https://i.pinimg.com/736x/86/b1/e2/86b1e229694dfc81de8a0656cdb77dc6.jpg',
    price: 40
  }
];

const sampleBookings = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    destinationId: '60d0fe4f5311236168a109ca'  // Replace with actual destination ID
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    destinationId: '60d0fe4f5311236168a109cb'  // Replace with actual destination ID
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/travel');

    await Destination.deleteMany({});
    await Destination.insertMany(sampleDestinations);
    console.log('Seeded Destinations!');

    await Booking.deleteMany({});
    await Booking.insertMany(sampleBookings);
    console.log('Seeded Bookings!');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();
