import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext([]);

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name != action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  console.log("children above is  ", { children });
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDueDate: itemDueDate,
      },
    };
    //dispatching the action object to the reducerfunction
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };

    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        items: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {/* console.log('children is ',{children}); */}
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
