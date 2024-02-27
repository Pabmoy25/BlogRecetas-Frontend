import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerRecetasAPI } from "../../helpers/queries";
import Swal from "sweetalert2";


const DetalleReceta = () => {
    const {id} = useParams();
  const [receta, setReceta] = useState({});
  
  useEffect(()=>{
    //buscar la receta que quiero maquetar
    cargarDetalle();
  },[])
  
  const cargarDetalle = async()=>{
    const respuesta = await obtenerRecetasAPI(id)
    if(respuesta.status === 200){
      //mostrar la receta en la card
      const datoReceta = await respuesta.json();
      setReceta(datoReceta);
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intente realizar esta operacion en unos minutos",
        icon: "error",
      });
    }
  }
  
    return (
      <Container className="my-3 mainpage">
        <Card>
          <Row>
            <Col md={12}>
              <Card.Img
                variant="top"
                src={receta.imagen}
                alt={receta.nombreReceta}
                className="card-img-top-detalle"
              />
            </Col>
            <Col md={12}>
              <Card.Body>
                <Card.Title className="primary-font fw-semibold"><h3>{receta.nombreReceta}</h3></Card.Title>
                <hr />
                <Card.Text>
                {receta.descripcion}
                <br/>
                <span className="primary-font fw-semibold">Categoria:</span> {receta.categoria}
                <br className='my-3'/>
                <span className="primary-font fw-semibold"><h5 className="mt-4">Ingredientes:</h5> {receta.ingredientes}</span>
                <br className='my-3'/>
                <span className="primary-font fw-semibold"><h5 className="mt-4">Preparación: </h5>{receta.preparacion}</span>
                <br className='my-3'/>
                </Card.Text>
                
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  };
  
export default DetalleReceta;