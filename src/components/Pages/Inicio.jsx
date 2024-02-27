
import { Container, Image, Row } from "react-bootstrap";
import bannerRecetas from "../../assets/bannerRecetas.png";
import CardRecetas from "./recetas/CardRecetas";


const Inicio = () => {
    
    return (
        <>
          <article>
            <Image src={bannerRecetas} className="img-fluid" />
          </article>
          
          <Container>
          <h2 className="text-center mt-5">Nuestras Recetas</h2>
          <hr />
<Row>
    <CardRecetas></CardRecetas>
</Row>
          
           
          </Container>
     
   
        </>
      );
    };

export default Inicio;