import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handChnage = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList((prev) => [...prev, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id == id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handChnage} value={newTask} type="text" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              key={task.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
              completed={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
