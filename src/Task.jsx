const Task = ({ taskName, id, deleteTask, completeTask, completed }) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: completed ? "green" : "white" }}
    >
      <h1>{taskName}</h1>
      <button onClick={() => completeTask(id)}>Complete</button>
      <button onClick={() => deleteTask(id)}>X</button>
    </div>
  );
};

export default Task;
