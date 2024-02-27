import { Button } from "react-bootstrap";
import React from "react";

const Receta = () => {
  return (
    <tr>
      <td className="text-center">1</td>
      <td>Arroz con Leche</td>
      <td className="text-center">
        <img
          src="https://mahatmarice.com/wp-content/uploads/2019/08/Arroz-Con-Leche-029-980x551.jpg.webp"
          className="img-thumbnail w-25"
          alt="imagen de arroz con leche"
        ></img>
      </td>
      <td>Postres</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="warning" className="me-lg-2 mt-2">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default Receta;
