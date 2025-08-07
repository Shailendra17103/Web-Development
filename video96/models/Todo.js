import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {type: String,required:true,default:"Hey"},
  desc: String,
  isDone: Boolean
});

const Todo = mongoose.model('Todo', TodoSchema); // Changed model name from 'Kitten' to 'Todo'
export default Todo;
