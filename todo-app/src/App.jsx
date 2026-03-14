import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-xl w-100 shadow-lg">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Task Manager
        </h1>
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()} 
            type="text"
            placeholder="Add new task..."
            className="flex-1 p-2 rounded bg-slate-700 text-white outline-none"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 px-4 rounded text-white hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-slate-700 p-3 rounded text-white flex justify-between items-center hover:scale-105 transition duration-200"
            >
              <span
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-400 hover:text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;