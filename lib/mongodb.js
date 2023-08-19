// lib/mongodb.js
import mongoose from 'mongoose';

async function mongodb() {
  try {
    await mongoose.connect('mongodb+srv://mariamffatima5:6CZllGwOXJAp7qr9@cluster0.8mtsv8w.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default mongodb;
