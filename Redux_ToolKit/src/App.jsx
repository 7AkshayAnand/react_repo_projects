import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header";
import DisplayCounter from "./Components/DisplayCounter";
import Container from "./Components/Container";
import Controls from "./Components/Controls";
import PrivacyMessage from "./Components/PrivacyMessage";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center class="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? (
            <PrivacyMessage></PrivacyMessage>
          ) : (
            <DisplayCounter></DisplayCounter>
          )}
          <Controls></Controls>
        </div>
      </Container>
    </center>
  );
}
export default App;
