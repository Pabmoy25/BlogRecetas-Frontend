
import { Container, Image, Row } from "react-bootstrap";
import bannerRecetas from "../../assets/bannerRecetas.png";
import CardRecetas from "./recetas/CardRecetas";
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";


const Inicio = () => {
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
    return (
        <>
          <article>
            <Image src={bannerRecetas} className="img-fluid" />
          </article>
          
          <Container>
          <h2 className="text-center mt-5">Nuestras Recetas</h2>
          <hr />
<Row>
{recetas.map((receta)=><CardRecetas key={receta._id} cardRecetas={receta}></CardRecetas>)}
</Row>
         
           
          </Container>
     
   
        </>
      );
    };

export default Inicio;