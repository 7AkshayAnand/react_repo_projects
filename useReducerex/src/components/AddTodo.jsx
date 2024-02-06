import { useRef } from "react";
import { MdAddToQueue } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function AddTodo() {
  const contextObj = useContext(TodoItemsContext);
  const addNewItem = contextObj.addNewItem;
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();

    let todoName = todoNameElement.current.value;
    let dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    // console.log(`current todoname is ${todoName}`);

    addNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form action="" className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter TODO here"
          />
        </div>
        <div className="col-4">
          <input type="Date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdAddToQueue />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
