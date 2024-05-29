import "./completed.css";
import todos from "../tasks";

const Completed = () => {
  const completed_tasks = todos.filter((task) => task.completed == true);
  return (
    <div className="task-completed">
      <h2>Completed Tasks</h2>
      <div>
        <ul>
          {completed_tasks.map((task) => (
            <li key={task.id}>{task.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Completed;
