import "./summary.css";
import todos from "../tasks";

const Summary = () => {
  const in_completed_tasks = todos.filter((item) => item.completed === false);
  const completed_tasks = todos.filter((item) => item.completed == true);

  return (
    <div className="summary">
      <h2>Summary</h2>
      <div className="tasks">
        <h3>Tasks</h3>
        <h4>{todos.length}</h4>
      </div>
      <div className="completed">
        <h3>Completed</h3>
        <h4>{completed_tasks.length > 0 ? completed_tasks.length : 0}</h4>
      </div>
      <div className="In-progress">
        <h3>In-Progress</h3>
        <h4>{in_completed_tasks.length > 0 ? in_completed_tasks.length : 0}</h4>
      </div>
    </div>
  );
};

export default Summary;
