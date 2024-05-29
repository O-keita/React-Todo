import "./todos.css";
import todos from "../tasks";
import { useState } from "react";

export const Todos = () => {
  const [tasks, settasks] = useState(todos);
  const in_completed_tasks = tasks.filter((task) => task.completed == false);

  const handleComplete = (id) => {
    const updated_task = tasks.map((task) =>
      task.id == id ? { ...task, completed: !task.completed } : task
    );

    settasks(updated_task);
  };
  return (
    <div className="todos">
      <h2>My Todos</h2>

      {in_completed_tasks.map((item) => (
        <div className="todo" key={item.id}>
          <button className="btn-drop">Drop Task</button>
          {item.description}
          <button
            className="btn-complete"
            onClick={() => handleComplete(item.id)}
          >
            Mark as Complete
          </button>
        </div>
      ))}
    </div>
  );
};
