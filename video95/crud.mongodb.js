use("CrudDb")

console.log(db)

db.createCollection("courses")

// db.courses.insertOne({
//     name:"Shailendra Web Dev Free",
//     price:0,
//     assignments:12,
//     projects:45
// })

// db.courses.insertMany([
//   {
//     "name": "Shailendra Web Dev Free",
//     "price": 0,
//     "assignments": 12,
//     "projects": 45
//   },
//   {
//     "name": "Full Stack Bootcamp",
//     "price": 19999,
//     "assignments": 20,
//     "projects": 10
//   },
//   {
//     "name": "Frontend Crash Course",
//     "price": 4999,
//     "assignments": 15,
//     "projects": 7
//   },
//   {
//     "name": "Backend Mastery",
//     "price": 14999,
//     "assignments": 18,
//     "projects": 12
//   },
//   {
//     "name": "React Developer Course",
//     "price": 7999,
//     "assignments": 14,
//     "projects": 6
//   },
//   {
//     "name": "Node.js Zero to Hero",
//     "price": 9999,
//     "assignments": 17,
//     "projects": 8
//   },
//   {
//     "name": "JavaScript Essentials",
//     "price": 2999,
//     "assignments": 10,
//     "projects": 4
//   },
//   {
//     "name": "Python Web Dev Course",
//     "price": 12999,
//     "assignments": 16,
//     "projects": 9
//   },
//   {
//     "name": "HTML/CSS Fundamentals",
//     "price": 999,
//     "assignments": 8,
//     "projects": 2
//   },
//   {
//     "name": "Django with Projects",
//     "price": 8999,
//     "assignments": 13,
//     "projects": 5
//   },
//   {
//     "name": "TypeScript in Depth",
//     "price": 5999,
//     "assignments": 11,
//     "projects": 3
//   }
// ]
// )

// let b=db.courses.findOne({
//     price:0
// })
// console.log(b)

db.courses.updateOne({
    price:0},{$set:{price:100}})

db.courses.updateMany({price:0},{$set:{price:1000}})

// db.courses.deleteOne({price:100})

db.courses.deleteMany({price:100})