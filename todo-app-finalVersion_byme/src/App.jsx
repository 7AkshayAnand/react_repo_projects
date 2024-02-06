import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";
import { useState } from "react";
import "./App.css";
function App() {
  let [todoItems, setTodoItems] = useState([
    { name: "litti", dueDate: "2024/2/1" },
  ]);
  function getSelectedItems(nm, dt) {
    let newObj = { name: nm, dueDate: dt };
    let newtodoItems = [...todoItems, newObj];
    setTodoItems(newtodoItems);
  }

  return (
    <center class="todo-container">
      <AppName />
      <AddTodo handler={getSelectedItems} />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
