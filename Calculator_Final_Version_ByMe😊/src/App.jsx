import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");

  const OnButtonClick = (button) => {
    if (button === "C") {
      setCalVal("");
    } else if (button === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + button;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer OnButtonClick={OnButtonClick}></ButtonsContainer>
    </div>
  );
}
export default App;
