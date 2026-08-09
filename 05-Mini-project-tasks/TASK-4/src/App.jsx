import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [priority, setPriority] = useState("")

  function addTask() {

    const newTask = {
      id: Date.now(),
      text: taskName,
      priority: priority,
      completed: false
    };

    setTasks([
      ...tasks,
      newTask
    ]);

  }

  function toggleCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filterType === "Completed") {
      return task.completed;
    }

    if (filterType === "Pending") {
      return !task.completed;
    }

    return true;
  });

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <input type="text" placeholder='Enter task' onChange={(e) => setTaskName(e.target.value)} style={{ height: "2.5rem", borderRadius: "10px", border: "1px solid grey", marginRight: "1rem" }} />
      <input type="text" placeholder='Enter priority' onChange={(e) => setPriority(e.target.value)} style={{ height: "2.5rem", borderRadius: "10px", border: "1px solid grey" }} />
      <button className='btn btn-info px-2 py-1 mx-3' onClick={addTask}>Add Task</button>
      <div className="my-3">
        <button
          className="btn btn-primary mx-1"
          onClick={() => setFilterType("All")}
        >
          All
        </button>

        <button
          className="btn btn-success mx-1"
          onClick={() => setFilterType("Completed")}
        >
          Completed
        </button>

        <button
          className="btn btn-warning mx-1"
          onClick={() => setFilterType("Pending")}
        >
          Pending
        </button>
      </div>

      <div className="list-group mt-4">
        {filteredTasks.map((task) => (
          <div key={task.id} className="list-group-item">
            <div className='d-flex gap-3 align-items-center'>
              <input type="checkbox" checked={task.completed} onChange={() => toggleCompleted(task.id)} />
              {task.completed ? <p className='text text-decoration-line-through'>{task.text}</p> : <p>{task.text}</p>}
              {
                task.priority === 'low' ?
                  <p className='badge bg-success'>Low</p> :
                  task.priority === 'medium' ?
                    <p className='badge bg-warning'>Medium</p> : <p className='badge bg-danger'>High</p>
              }
              <button className='border-1 rounded-3' onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

    </>
  )

}

export default App
