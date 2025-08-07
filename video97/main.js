// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name:"Shailendra",
//     salary:"345654345",
//     language:"Python",
//     city:"Chicago",
//     isManager:true
// }

// Generate 10 such records when a button called generate data is clicked
// Create an Express app with mongoose to achieve it
// Everytime the button is clicked, you should clear the collection

const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models/Employee');

const app = express();
const port = 3000;

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/company', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
connectDB();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Helper to pick a random element
const getRandom = (arr) => {
  const rno = Math.floor(Math.random() * arr.length); // fixed bug
  return arr[rno];
};

// Home Route
app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
});

// Generate random employees
app.get('/generate', async (req, res) => {
  try {
    await Employee.deleteMany({});

    const randomNames = ['Rohan', 'Sohan', 'Mohan', 'Sobhan'];
    const randomLang = ['Python', 'JavaScript', 'C++', 'Java'];
    const randomCities = ['Bilaspur', 'Moradabad', 'Mysore', 'Kolkata'];

    for (let i = 0; i < 10; i++) {
      const employee = await Employee.create({
        name: getRandom(randomNames),
        salary: Math.floor(Math.random() * 22000),
        language: getRandom(randomLang),
        city: getRandom(randomCities),
        isManager: Math.random() > 0.5
      });
      console.log(employee);
    }

    res.render('index', { foo: 'Data generated' });
  } catch (error) {
    console.error("Error in /generate:", error);
    res.status(500).send("Server Error");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
