import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container style={{paddingLeft:"75px"}}>
        <NavBar></NavBar>
        <Header></Header>
        <Main></Main>
      </Container>
    </div>
  );
}

export default App;
