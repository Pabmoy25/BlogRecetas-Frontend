import { Form, Button } from "react-bootstrap";
import { crearRecetaAPI } from "../../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const FormularioRecetas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();


  const recetaValidada = async(receta) => {
    
    const respuesta = await crearRecetaAPI(receta);
    if(respuesta.status === 201){
      Swal.fire({
        title: "Receta creada",
        text: `La Receta: ${receta.nombreReceta} fue creada con exito`,
        icon: "success",
      });
      reset();
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intente crear la receta en unos minutos",
        icon: "error",
      });
    }
  };
    return (
        <section className="container mainpage">
          <h1 className="display-4 mt-5 titulo-administrador">Nueva Receta</h1>
          <hr />
          
          <Form className="my-4" onSubmit={handleSubmit(recetaValidada)}>
            <Form.Group className="mb-3" controlId="formNombreProdcuto">
              <Form.Label>Nombre de la Receta*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Arroz con Leche" {
                  ...register("nombreReceta",{
                    required: "El nombre de la receta es obligatorio",
                    minLength:{
                      value: 2,
                      message: "Debe ingresar como minimo 2 caracteres para el nombre de la receta"
                    },
                    maxLength:{
                      value: 50,
                      message: "Debe ingresar como maximo 50 caracteres para el nombre de la receta"
                    }
                  })
                }
              />
              <Form.Text className="text-danger">
              {errors.nombreReceta?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNombreProdcuto">
              <Form.Label>Descripción*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Arroz con Leche, limón y canela"
                {
                  ...register("descripcion",{
                    required: "La descripción dela receta es obligatoria",
                    minLength:{
                      value: 10,
                      message: "Debe ingresar como minimo 10 caracteres para la descripción"
                    },
                    maxLength:{
                      value: 60,
                      message: "Debe ingresar como maximo 60 caracteres para la descripción"
                    }
                  })
                }
              />
              <Form.Text className="text-danger">
              {errors.descripcion?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Imagen URL*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
                {...register("imagen", {
                  required: "La imagen es obligatoria",
                  pattern: {
                    value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
                    message: "Debe ingresar una URL valida (jpg|gif|png|jpeg)",
                  },
                })}              
              />
              <Form.Text className="text-danger">
              {errors.imagen?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Categoría*</Form.Label>
              <Form.Select {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}>
                <option value="">Seleccione una opcion</option>
                <option value="Postres y Dulces">Postres y Dulces</option>
                <option value="Pastas">Pastas</option>
                <option value="Carnes">Carnes</option>
                <option value="Guarniciones">Guarniciones</option>
                <option value="Minutas">Minutas</option>
              </Form.Select>
              <Form.Text className="text-danger">
              {errors.categoria?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Ingredientes*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 100 g de arroz doble carolina, 1 litro de leche, 150 g de azúcar, 200 cc de crema de leche, 1 rama de canela, 2 tiritas de piel de limón, Canela en polvo, a gusto."
                as="textarea"
                {
                  ...register("ingredientes",{
                    required: "Los ingredientes son obligatorios",
                    minLength:{
                      value: 20,
                      message: "Debe ingresar como minimo 20 caracteres para los ingredientes"
                    },
                    maxLength:{
                      value: 500,
                      message: "Debe ingresar como maximo 500 caracteres para los ingredientes"
                    }
                  })
                }
              />
              <Form.Text className="text-danger">
              {errors.ingredientes?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Preparación*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Paso 1: En una cacerola llevar la leche, la rama de canela y las tiritas de piel de limón. Calentar hasta hervir..."
                as="textarea"
                {
                  ...register("preparacion",{
                    required: "La forma de realizar la receta es obligatoria",
                    minLength:{
                      value: 50,
                      message: "Debe ingresar como minimo 20 caracteres para los ingredientes"
                    },
                    maxLength:{
                      value: 1000,
                      message: "Debe ingresar como maximo 500 caracteres para los ingredientes"
                    }
                  })
                }

              />
              <Form.Text className="text-danger">
              {errors.preparacion?.message}
              </Form.Text>
            </Form.Group>
            
            <Button type="submit" variant='warning'>
              Guardar
            </Button>
          </Form>
        </section>
      );
    };

export default FormularioRecetas;