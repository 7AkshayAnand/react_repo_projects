import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import FreeMsg from "./components/FreeMsg";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    // console.log("returned value is ", itemDueDate);
    setTodoItems((currItems) => {
      const newTodoItems = [
        ...currItems,
        { name: itemName, dueDate: itemDueDate },
      ];

      return newTodoItems;
    });
  };

  const deleteItem = (todoItemnName) => {
    const newTodoItem = todoItems.filter((item) => item.name != todoItemnName);
    setTodoItems(newTodoItem);
    console.log("item deleted called", todoItemnName);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        items: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <FreeMsg></FreeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
