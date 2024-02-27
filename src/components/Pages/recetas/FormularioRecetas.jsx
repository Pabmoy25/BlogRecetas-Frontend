import { Form, Button } from "react-bootstrap";


const FormularioRecetas = () => {
    return (
        <section className="container mainpage">
          <h1 className="display-4 mt-5 titulo-administrador">Nueva Receta</h1>
          <hr />
          
          <Form className="my-4">
            <Form.Group className="mb-3" controlId="formNombreProdcuto">
              <Form.Label>Nombre de la Receta*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Arroz con Leche"
              />
              <Form.Text className="text-danger">
                prueba de error
              </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Imagen URL*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
              />
              <Form.Text className="text-danger">
            prueba de error
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Categoría*</Form.Label>
              <Form.Select>
                <option value="">Seleccione una opcion</option>
                <option value="Infusiones">Postres y Dulces</option>
                <option value="Batidos">Pastas</option>
                <option value="dulce">Carnes</option>
                <option value="salado">Guarniciones</option>
              </Form.Select>
              <Form.Text className="text-danger">
              prueba de error
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Ingredientes*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 100 g de arroz doble carolina, 1 litro de leche, 150 g de azúcar, 200 cc de crema de leche, 1 rama de canela, 2 tiritas de piel de limón, Canela en polvo, a gusto."
                as="textarea"
              />
              <Form.Text className="text-danger">
            prueba de error
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Preparacion*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Paso 1: En una cacerola llevar la leche, la rama de canela y las tiritas de piel de limón. Calentar hasta hervir..."
                as="textarea"
              />
              <Form.Text className="text-danger">
            prueba de error
              </Form.Text>
            </Form.Group>
            
            <Button type="submit" variant='success'>
              Guardar
            </Button>
          </Form>
        </section>
      );
    };

export default FormularioRecetas;