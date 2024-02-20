import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/Common/Menu";
import Footer from "./components/Common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Inicio from "./components/Pages/Inicio";
import Error404 from "./components/Pages/Error404";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Menu></Menu>
        <Container className="mainpage">
          <Routes>
            <Route>
              <Route exact path="/" element={<Inicio></Inicio>}></Route>
              <Route
                exact
                path="/inicio"
                element={<Inicio></Inicio>}
              ></Route>
              <Route exact path="/error" element={<Error404></Error404>}></Route>
              <Route path="*" element={<Error404></Error404>}></Route>
            </Route>
          </Routes>
        </Container>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
