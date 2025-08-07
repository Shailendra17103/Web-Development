import { useState, useEffect } from 'react'
import { FaEdit, FaPlus, FaRegClock } from "react-icons/fa";
import { MdDelete, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("2025-08-05 08:40:53");
  const [username] = useState("Shailendra");

  // Update time
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const formatted = now.getUTCFullYear() + '-' + 
                       String(now.getUTCMonth() + 1).padStart(2, '0') + '-' +
                       String(now.getUTCDate()).padStart(2, '0') + ' ' +
                       String(now.getUTCHours()).padStart(2, '0') + ':' +
                       String(now.getUTCMinutes()).padStart(2, '0') + ':' +
                       String(now.getUTCSeconds()).padStart(2, '0');
      setCurrentDateTime(formatted);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
    
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const saveToLS = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
  }

  const handleDelete = (e, id) => {
    const todoElement = document.getElementById(`todo-${id}`);
    todoElement.classList.add('fade-out');
    
    setTimeout(() => {
      let newTodos = todos.filter(item => item.id !== id);
      setTodos(newTodos);
      saveToLS(newTodos);
    }, 300);
  }

  const handleAdd = () => {
    if (todo.trim().length <= 3) return;
    let newTodos = [{
      id: uuidv4(),
      todo,
      isCompleted: false,
      createdAt: new Date().toISOString()
    }, ...todos];
    setTodos(newTodos);
    setTodo("");
    saveToLS(newTodos);
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckbox = (e) => {
    let id = e.target.getAttribute("data-id");
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS(newTodos);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && todo.trim().length > 3) {
      handleAdd();
    }
  }
  
  const completedCount = todos.filter(item => item.isCompleted).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-stone-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          {/* Header Section with Meta Information */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-100">Task Management System</h1>
              <div className="flex flex-col sm:flex-row sm:items-center mt-2 text-sm text-gray-500 dark:text-gray-400 gap-2 sm:gap-4">
                <div className="flex items-center">
                  <FaRegClock className="mr-1" />
                  <span>{currentDateTime} UTC</span>
                </div>
                <div className="hidden sm:block">|</div>
                <div>User: {username}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-stone-200 dark:bg-gray-800 shadow-sm rounded px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-stone-300 dark:border-gray-700">
                <span className="text-blue-700 dark:text-blue-500 mr-1">{pendingCount}</span> Pending
              </div>
              <div className="bg-stone-200 dark:bg-gray-800 shadow-sm rounded px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-stone-300 dark:border-gray-700">
                <span className="text-green-700 dark:text-green-500 mr-1">{completedCount}</span> Completed
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="ml-2 bg-stone-200 dark:bg-gray-800 border border-stone-300 dark:border-gray-700 p-2 rounded text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
              </button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input Section */}
            <div className="lg:col-span-12 bg-stone-50 dark:bg-gray-800 rounded-md shadow-sm border border-stone-300 dark:border-gray-700">
              <div className="p-4 border-b border-stone-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 flex items-center">
                  <HiOutlineClipboardList className="mr-2" /> 
                  Task Manager
                </h2>
              </div>
              <div className="p-4">
                <div className="flex gap-2">
                  <input 
                    onChange={handleChange} 
                    value={todo} 
                    type="text" 
                    placeholder="Enter task description..."
                    onKeyDown={handleKeyDown}
                    className="flex-1 px-4 py-2 bg-stone-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-stone-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    aria-label="Add task"
                  />
                  <button 
                    onClick={handleAdd} 
                    disabled={todo.trim().length <= 3} 
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-800 disabled:cursor-not-allowed text-white rounded transition-colors flex items-center"
                  >
                    <FaPlus className="mr-1" /> Add Task
                  </button>
                </div>
                
                <div className="flex justify-end mt-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showFinished}
                      onChange={toggleFinished}
                      className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out border-stone-400"
                    />
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      Display completed tasks
                    </span>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Task List */}
            <div className="lg:col-span-12">
              <div className="bg-stone-50 dark:bg-gray-800 rounded-md shadow-sm border border-stone-300 dark:border-gray-700">
                <div className="p-4 border-b border-stone-200 dark:border-gray-700 flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200">Tasks</h2>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Total: {todos.length}
                  </div>
                </div>
                
                <div className="divide-y divide-stone-200 dark:divide-gray-700">
                  {todos.length === 0 && (
                    <div className="p-8 text-center">
                      <IoCheckmarkDoneCircleOutline className="mx-auto text-4xl text-gray-300 dark:text-gray-600 mb-2" />
                      <p className="text-gray-500 dark:text-gray-400">
                        No tasks available. Your schedule is clear.
                      </p>
                    </div>
                  )}
                  
                  {todos.map(item => {
                    const date = new Date(item.createdAt || Date.now());
                    const formattedDate = date.toISOString().replace('T', ' ').substr(0, 19);
                    
                    return (showFinished || !item.isCompleted) && (
                      <div
                        id={`todo-${item.id}`}
                        key={item.id}
                        className={`p-4 transition-all duration-200 hover:bg-stone-100 dark:hover:bg-gray-750 animate-fade-in ${
                          item.isCompleted ? 'bg-stone-100/70 dark:bg-gray-800/50' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            <div className="pt-0.5">
                              <input 
                                onChange={handleCheckbox} 
                                type="checkbox" 
                                data-id={item.id} 
                                checked={item.isCompleted}
                                aria-label={item.isCompleted ? "Mark as incomplete" : "Mark as complete"}
                                className="form-checkbox h-5 w-5 text-blue-600 rounded border-stone-400 dark:border-gray-600 focus:ring-blue-500 transition duration-150 ease-in-out"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`text-base select-none ${
                                item.isCompleted 
                                  ? "line-through text-gray-400 dark:text-gray-500" 
                                  : "text-gray-700 dark:text-gray-200"
                              }`}>
                                {item.todo}
                              </div>
                              <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                Created: {formattedDate}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <button
                              onClick={(e) => handleEdit(e, item.id)}
                              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 p-1 rounded transition-colors"
                              aria-label="Edit task"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={(e) => handleDelete(e, item.id)}
                              className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 p-1 rounded transition-colors"
                              aria-label="Delete task"
                            >
                              <MdDelete />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-xs text-gray-500 dark:text-gray-400 border-t border-stone-200 dark:border-gray-800 pt-4">
            <div className="flex justify-between items-center">
              <div>Session: {username}</div>
              <div>iTask Enterprise Edition &copy; 2025</div>
            </div>
          </div>
        </div>
        <style>{`
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out;
          }
          
          .fade-out {
            animation: fadeOut 0.3s ease-out forwards;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
              height: 0;
              padding: 0;
              margin: 0;
              overflow: hidden;
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default App;