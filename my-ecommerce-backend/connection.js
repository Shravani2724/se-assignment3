// connection.js
const mongoose = require('mongoose');

// Define MongoDB connection URI
const mongoURI = 'mongodb+srv://bommishettishravani:HDU1BVuaphTUThLP@shravcluster.8ngdp.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;