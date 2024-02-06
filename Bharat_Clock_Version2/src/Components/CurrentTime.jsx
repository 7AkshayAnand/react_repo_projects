import { useEffect } from "react";
import { useState } from "react";
import Nav from "./Nav";
let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  const [nav, setnav] = useState(false);

  useEffect(() => {
    console.log("interval has been setUp");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("interval calclled");
    };
  }, []);

  return (
    <>
      <p className="lead">
        This is the current time:{time.toLocaleDateString()}-{"  "}
        {time.toLocaleTimeString()}{" "}
      </p>
    </>
  );
};
export default CurrentTime;
