
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "price": "20000",
    "instructor": "Shailendra"
  },
  {
    "name": "Python",
    "price": "18000",
    "instructor": "Amit"
  },
  {
    "name": "Web Development",
    "price": "25000",
    "instructor": "Neha"
  },
  {
    "name": "Data Structures",
    "price": "22000",
    "instructor": "Ravi"
  },
  {
    "name": "Machine Learning",
    "price": "30000",
    "instructor": "Priya"
  },
  {
    "name": "C++",
    "price": "19000",
    "instructor": "Vikram"
  },
  {
    "name": "ReactJS",
    "price": "21000",
    "instructor": "Kiran"
  },
  {
    "name": "Spring Boot",
    "price": "23000",
    "instructor": "Anjali"
  },
  {
    "name": "Android Development",
    "price": "26000",
    "instructor": "Sandeep"
  },
  {
    "name": "DevOps",
    "price": "28000",
    "instructor": "Meena"
  },
  {
    "name": "Cyber Security",
    "price": "27000",
    "instructor": "Rohit"
  }
]);



// Print a message to the output window.
console.log("Done inserting data");

