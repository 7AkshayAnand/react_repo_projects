import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import FreeMsg from "./components/FreeMsg";
import TodoItems from "./components/TodoItems";
import TodoItemsContextProvider from "./store/todo-items-store";

import "./App.css";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <FreeMsg></FreeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
