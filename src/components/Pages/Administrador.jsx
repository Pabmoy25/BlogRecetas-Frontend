import { Table } from "react-bootstrap";
import Receta from "./recetas/Receta";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { borrarRecetaAPI, leerRecetasAPI } from "../../helpers/queries";




const Administrador = () => {
    const [recetas, setRecetas] = useState([]);
    useEffect(() => {
      traerRecetas();
    }, []);

    const traerRecetas = async ()=> {
        try {
         const listaRecetasAPI = await leerRecetasAPI()
         setRecetas (listaRecetasAPI);
        } catch (error) {
          console.log(error);
        }
      }

      const borrarReceta = async (id) => {
        try {
          await borrarRecetaAPI(id);
          setRecetas(recetas.filter(receta => receta._id !== id));
        } catch (error) {
          console.log(error);
        }
      }


    return (
        <section className="container mainpage">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h1 className="display-4 titulo-administrador">Recetas</h1>
            <Link className="btn btn-primary" to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
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
            {
            recetas.map((receta)=><Receta key={receta._id} receta={receta} eliminarReceta={borrarReceta}></Receta>)
          }
          
            </tbody>
          </Table>
        </section>
      );
    };

export default Administrador;