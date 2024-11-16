const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const profilesRouter = require('./controllers/profiles');
const cors = require('cors');

// Import routers
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// Use the routes
app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);  // This line is important for /users routes
app.use('/profiles', profilesRouter);
app.use(cors())


// Start the server
app.listen(3000, () => {
  console.log('The express app is ready!');
});
