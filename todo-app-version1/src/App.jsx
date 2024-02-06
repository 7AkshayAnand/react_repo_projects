import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoITem1";

import Item2 from "./components/item2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        <TodoItem1></TodoItem1>
        <Item2></Item2>
      </div>
    </center>
  );
}

export default App;
