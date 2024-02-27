import { Container, Image, Button } from "react-bootstrap";
import logoError from "../../../src/assets/error404.png";
import { NavLink } from "react-router-dom";


const Error404 = () => {
    return (
        <>
        <Container>
          <NavLink end className="nav-link" to="/">
            <div className="text-center d-flex align-items-center justify-content-center flex-column">
              <Image src={logoError} className="img-fluid me-4 w-50" />
              <Button variant="warning" className="my-2 py-2">
                Ir al Inicio
              </Button>
            </div>
          </NavLink>
        </Container>
      </>
    );
  };

export default Error404;