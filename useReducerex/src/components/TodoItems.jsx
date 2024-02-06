import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const TodoItems = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.items;

  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
