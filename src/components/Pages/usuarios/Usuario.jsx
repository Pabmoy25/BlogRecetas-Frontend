import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Usuario = ({ usuario }) => {
  return (
    <tr>
      <td className="text-center">{usuario.id}</td>
      <td>{usuario.email}</td>
      <td className="text-center">
        <Link variant="warning" className="me-lg-2 btn btn-warning">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" className="me-lg-2">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default Usuario;
