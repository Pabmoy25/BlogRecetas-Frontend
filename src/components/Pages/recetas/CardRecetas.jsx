import { Col, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const CardRecetas = ({cardRecetas}) => {
    return (
        <Col md={4} lg={3} className="mb-3">
          <Card className="h-100">
            <div>
              <img src={cardRecetas.imagen} alt={cardRecetas.nombreReceta} className="card-img-top-nueva" />
            </div>
            <Card.Body>
            <Card.Title className="primary-font">{cardRecetas.nombreReceta}</Card.Title>
            <Card.Text>
            {cardRecetas.descripcion}<br className="mb-2"/> 
             </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center bg-black">
            <Link className='btn btn-warning me-2 btnCard' to={'/detalleReceta/'+ cardRecetas._id}>Ver Receta</Link>
          </Card.Footer>
          </Card>
        </Col>
      );
    };

export default CardRecetas;