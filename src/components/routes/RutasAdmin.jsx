import { Route, Routes} from "react-router-dom"
import Administrador from "../Pages/Administrador";
import FormularioRecetas from "../Pages/recetas/FormularioRecetas";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>} />
        <Route
          exact
          path="/crear"
          element={<FormularioRecetas editar={false} titulo="Nueva Receta" />}
        />
        <Route
          exact
          path="/editar/:id"
          element={<FormularioRecetas editar={true} titulo="Editar Receta" />}
        />
      </Routes>
    </>
  );
};

export default RutasAdmin