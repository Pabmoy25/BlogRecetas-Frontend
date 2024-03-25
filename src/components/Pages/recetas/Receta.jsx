import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarRecetaAPI } from "../../../helpers/queries";
import { Link } from "react-router-dom";


const Receta = ({receta, eliminarReceta}) => {

  const borrarReceta = () => {
    Swal.fire({
      title: "Esta seguro de eliminar la receta?",
      text: "No puedes revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
       
      const respuesta = await borrarRecetaAPI(receta._id);
if (respuesta.status === 200) {
        Swal.fire({
          title: "La receta fue eliminada",
          text: `La receta "${receta.nombreReceta}" fue eliminada`,
          icon: "success",
        });
        eliminarReceta(receta._id)
      }else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `La receta "${receta.nombreReceta}" no fue eliminada, intentelo en unos minutos`,
          icon: "success",
        });
      
      }
      }
    });
  };


  return (
    <tr>
      <td className="text-center">{receta._id}</td>
      <td>{receta.nombreReceta}</td>
      <td className="text-center">
        <img
          src={receta.imagen}
          className="img-thumbnail w-25"
          alt="imagen de arroz con leche"
        ></img>
      </td>
      <td>{receta.categoria}</td>
      <td className="text-center">
        <Link variant="warning" className="me-lg-2 btn btn-warning" to={`/administrador/editar/${receta._id}`}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarReceta} className="me-lg-2 mt-2">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default Receta;
