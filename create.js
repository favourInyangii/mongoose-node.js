require('dotenv').config();
const mongoose = require('mongoose');

// Debug line to check if MONGO_URI is being loaded correctly
console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error: ", err));


  // Import mongoose schema
const Schema = mongoose.Schema;

// Define a schema for a person with name, age, and favoriteFoods fields
const personSchema = new Schema({
  name: { type: String, required: true }, // Name is a required string
  age: Number, // Age is a number
  favoriteFoods: [String] // favoriteFoods is an array of strings
});

// Create a model based on the person schema
const Person = mongoose.model('Person', personSchema);