import { Col, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const CardRecetas = () => {
    return (
        <Col md={4} lg={3} className="mb-3">
          <Card className="h-100">
            <div>
              <img src="https://mahatmarice.com/wp-content/uploads/2019/08/Arroz-Con-Leche-029-980x551.jpg.webp" alt="Arroz con Leche" className="card-img-top-nueva" />
            </div>
            <Card.Body>
            <Card.Title className="primary-font">Arroz con Leche</Card.Title>
            <Card.Text>
              Descripción: Consiste en arroz cocido en leche con azúcar y canela. <br className="mb-2"/> 
             </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center bg-black">
            <Link className='btn btn-warning me-2'>Ver Receta</Link>
          </Card.Footer>
          </Card>
        </Col>
      );
    };

export default CardRecetas;