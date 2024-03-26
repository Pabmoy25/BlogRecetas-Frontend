import { Link } from "react-router-dom";
import { leerUsuarioAPI } from "../../helpers/queries";
import Usuario from "./usuarios/Usuario";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const UsuariosAdmin = () => {
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    traerUsuario();
  }, []);

  const traerUsuario = async () => {
    try {
      const listaUsuarioAPI = await leerUsuarioAPI();
      setUsuario(listaUsuarioAPI);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container mainpage">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 titulo-administrador">Usuarios</h1>
        <Link className="btn btn-primary" to="/adminUsuario/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Usuario</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {usuario.map((usuario) => (
            <Usuario key={usuario.id} usuario={usuario}></Usuario>
          ))}
        </tbody>
      </Table>
    </section>
  );
};
export default UsuariosAdmin;
