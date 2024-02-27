import { Button, Table } from "react-bootstrap";
import Receta from "./recetas/Receta";


const Administrador = () => {
    return (
        <section className="container mainpage">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-4 titulo-administrador">Recetas</h1>
            <Button variant="warning">
             <i className="bi bi-file-earmark-plus"></i>
            </Button>
          </div>
          <hr />
          <Table responsive striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>Cod</th>
                <th>Receta</th>
                <th>URL de Imagen</th>
                <th>Categoria</th>
                <th>Opciones</th>
            </tr>
            </thead>
            <tbody>
              <Receta></Receta>
              <Receta></Receta>
              <Receta></Receta>
              <Receta></Receta>
            </tbody>
          </Table>
        </section>
      );
    };

export default Administrador;