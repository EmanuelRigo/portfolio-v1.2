import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import Hero from "./components/Hero";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="mr-md-0 mr-2" style={{ paddingLeft: "91px" }}>
        <NavBar></NavBar>
        <Header></Header>
        <Hero></Hero>
        <Main></Main>
      </Container>
    </div>
  );
}

export default App;
