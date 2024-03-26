import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Menu from "./components/Common/Menu";
import Footer from "./components/Common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Pages/Inicio";
import Error404 from "./components/Pages/Error404";
import Administrador from "./components/Pages/Administrador";
import FormularioRecetas from "./components/Pages/recetas/FormularioRecetas";
import DetalleReceta from "./components/Pages/DetalleReceta";
import Login from "./components/Pages/Login";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import UsuariosAdmin from "./components/Pages/UsuariosAdmin";


function App() {
  const usuario = JSON.parse(sessionStorage.getItem(
    "inicioRollingCooking")) || '' ;
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario)

  return (
    <>
        <BrowserRouter>
        <Menu usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}>

          </Menu>
        <section className="mainpage">
          <Routes>
            <Route>
              <Route exact path="/" element={<Inicio></Inicio>}></Route>
              <Route
                exact
                path="/inicio"
                element={<Inicio></Inicio>}
              ></Route>
              <Route
                exact
                path="/login"
                element={<Login setUsuarioLogueado={setUsuarioLogueado} ></Login>}
              ></Route>
              <Route
              exact
              path="/administrador/*"
              element={<RutasProtegidas><RutasAdmin></RutasAdmin></RutasProtegidas>}
            ></Route>
              <Route exact path="/error" element={<Error404></Error404>}></Route>
              
              <Route path="*" element={<Error404></Error404>}></Route>
            </Route>
            <Route
              exact
              path="/administrador/crear"
              element={
                <FormularioRecetas
                editar={false}
                  titulo="Nueva Receta"></FormularioRecetas>
              }
            ></Route>
            <Route
              exact
              path="/detalleReceta/:id"
              element={<DetalleReceta></DetalleReceta>}
            ></Route>
            <Route
              exact
              path="/administrador/editar/:id"
              element={
                <FormularioRecetas
                  editar={true}
                  titulo="Editar Receta"
                ></FormularioRecetas>
              }
            ></Route>
            <Route
              exact
              path="/adminUsuario"
              element={
                <UsuariosAdmin
                  editar={true}
                  titulo="Editar Receta"
                ></UsuariosAdmin>
              }
            ></Route>

          </Routes>
        </section>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
