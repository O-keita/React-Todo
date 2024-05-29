import Completed from "../Completd/Completed";
import Summary from "../Summary/Summary";
import { Todos } from "../Todos/Todos";
import "./body.css";

const Body = () => {
  return (
    <div className="body">
      <Summary />
      <Todos />
      <Completed />
    </div>
  );
};

export default Body;
