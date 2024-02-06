import "./App.css";
import ClockHeading from "./Components/ClockHeading";
import ClockSlogan from "./Components/ClockSlogan";
import CurrentTime from "./Components/CurrentTime";
import { useEffect, useState } from "react";
import Nav from "./Components/Nav";
// import "bootstrap/dist/css/boostrap.min.css";
function App() {
  const [nav, setnav] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setnav(true);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      console.log("cancleed the timer");
    };
  }, []);

  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      {/* when 3 seconds passes the Nav component will be painted and currentTime component will be destroyed so after 3 seconds
        the anonymous method of useEffect() will be executedd for cleanup purpose
      */}
      {nav ? <Nav /> : <CurrentTime></CurrentTime>}
    </center>
  );
}

export default App;
