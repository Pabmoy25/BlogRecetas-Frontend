import { Form, Button } from "react-bootstrap";
import { crearUsuarioAPI } from "../../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


crearUsuarioAPI

const FormUsuarios = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
      } = useForm();

       return (
            <section className="container mainpage">
              <h1 className="display-4 mt-5 titulo-administrador">Nuevo Usuario</h1>
              <hr />
              
              <Form className="my-4" onSubmit={handleSubmit()}>
                <Form.Group className="mb-3" controlId="formNombreUsuario">
                  <Form.Label>Nombre de Usuario (email)*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="jose.Perez@gmail.com" {
                      ...register("email",{
                        required: "El nombre del usuario es obligatorio",
                        minLength:{
                          value: 2,
                          message: "Debe ingresar como minimo 2 caracteres"
                        },
                        maxLength:{
                          value: 30,
                          message: "Debe ingresar como maximo 30 caracteres"
                        },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Por favor ingresa un email válido",
                          },
                      })
                    }
                  />
                  <Form.Text className="text-danger">
                  {errors.email?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNombreUsuario">
                  <Form.Label>Contraseña*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Password"
                    {
                      ...register("password",{
                        required: "La contraseña es obligatoria",
                        minLength:{
                          value: 7,
                          message: "Debe ingresar como minimo 7 caracteres para la contraseña"
                        },
                        maxLength:{
                          value: 12,
                          message: "Debe ingresar como maximo 12 caracteres para la contraseña"
                        },
                        pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                            message:
                              "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                          }
                      })
                    }
                  />
                  <Form.Text className="text-danger">
                  {errors.password?.message}
                  </Form.Text>
                </Form.Group>

                <Button type="submit" variant='warning'>
                  Guardar
                </Button>
              </Form>
            </section>
          );
        };

export default FormUsuarios;