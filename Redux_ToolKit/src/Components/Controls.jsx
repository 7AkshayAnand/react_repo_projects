import { useDispatch } from "react-redux";
import "../App.css";
import { useRef } from "react";
import { counterActions, privacyActions } from "../Store";
const Controls = () => {
  // useDisptach returns a method , using that method we can dispatch actions
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncrement = () => {
    console.log("increment called");
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    console.log("decrement called");
    dispatch(counterActions.decrement());
  };
  const handleAdd = () => {
    // dispatch({ type: "ADD", payload: { num: inputElement.current.value } });
    dispatch(counterActions.add({ num: Number(inputElement.current.value) }));
    inputElement.current.value = "";
  };
  const handleSubstract = () => {
    dispatch(
      counterActions.substract({ num: Number(inputElement.current.value) })
    );
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy
        </button>
      </div>
      <br />
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          placeholder="Enter Number"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
};
export default Controls;
