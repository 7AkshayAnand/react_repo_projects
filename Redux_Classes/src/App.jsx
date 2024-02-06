// import { useRef } from "react";
// function App() {
//   let count = useRef(0);
//   let myc = 0;
//   function handleClick() {
//     let count = useRef(0);
//     myc++;
//     count.current = count.current + 1;
//     alert(count.current);
//     alert(myc);
//     // console.log("i am clicked ", count.current);
//   }
//   return <button onClick={handleClick}> CLick me</button>;
// }
// export default App;

import React, { useRef, useState } from "react";

function App() {
  let count = useRef(0);
  let myc = 0;

  const [state, setState] = useState(0);

  function handleClick() {
    myc++;
    count.current = count.current + 1;
    setState(state + 1); // Triggering a re-render when state changes
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Value of myc: {myc}</p>
      <p>Value of count.current: {count.current}</p>
      <p>Value of state: {state}</p>
    </div>
  );
}

export default App;
