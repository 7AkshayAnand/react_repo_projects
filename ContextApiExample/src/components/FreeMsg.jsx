import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const FreeMsg = () => {
  const contextObj = useContext(TodoItemsContext);
  return contextObj.items.length === 0 && <h1>Enjoy free time</h1>;
};
export default FreeMsg;
