import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Common/Footer";
import Menu from "./components/Common/Menu";
import Inicio from "./components/Pages/Inicio";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <><Menu></Menu>
      <Container className="mainpage">
      
    <h1>hola</h1>
    </Container>
    <Footer></Footer>
    </>
  );
}

export default App;
