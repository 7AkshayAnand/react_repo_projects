import { useSelector } from "react-redux";
const DisplayCounter = () => {
  const counterObj = useSelector((state) => state.counter);
  /*
In Redux, when you use createSlice from the @reduxjs/toolkit, it automatically generates actions and reducers based on the defined initial state and reducers. The initial state is not a key; rather, it's the value associated with the "counter" key in the Redux store.

Here, the initial state is an object { counterVal: 0 }. When you use useSelector((state) => state.counter), you're selecting the entire state associated with the "counter" slice. The state itself is an object, and you can directly access the counterVal property as counterObj.counterVal
*/
  const counter = counterObj.counterVal;
  return <p className="lead mb-4">Counter Current value {counter}</p>;
};

export default DisplayCounter;
