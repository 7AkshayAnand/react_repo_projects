import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import FreeMsg from "./components/FreeMsg";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemnName) => {
    const newTodoItem = todoItems.filter((item) => item.name != todoItemnName);
    setTodoItems(newTodoItem);
    console.log(`item deleted ${todoItemnName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />

      {todoItems.length === 0 ? <FreeMsg></FreeMsg> : null}

      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
