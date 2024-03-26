const URI_RECETAS = import.meta.env.VITE_API_RECETAS;
console.log(URI_RECETAS);

const URI_USUARIOS = import.meta.env.VITE_API_USUARIOS;
console.log(URI_USUARIOS);


export const leerUsuarioAPI = async () => {
  try {
    const respuesta = await fetch(URI_USUARIOS);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuarioAPI = async (usuarioNuevo) => {
  try {
    const respuesta = await fetch(URI_RECETAS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuarioNuevo),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const leerRecetasAPI = async () => {
    try {
      const respuesta = await fetch(URI_RECETAS);
      const listaRecetas = await respuesta.json();
      return listaRecetas;
    } catch (error) {
      console.log(error);
    }
  };

  

  

  export const obtenerRecetasAPI = async (id) => {
    try {
      const respuesta = await fetch(`${URI_RECETAS}/${id}`);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const crearRecetaAPI = async (recetaNueva) => {
    try {
      const respuesta = await fetch(URI_RECETAS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recetaNueva),
      });
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const borrarRecetaAPI = async (id) => {
    try {
      const respuesta = await fetch(`${URI_RECETAS}/${id}`, {
        method: "DELETE",
      });
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };


  export const editarRecetasAPI = async (id, receta) => {
    try {
      const respuesta = await fetch(`${URI_RECETAS}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(receta),
      });
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  const admin = {
    email: "admin@rollingcode.com",
    password: "Pablo2517",
  };

  export const login = (usuario) => {
    if (usuario.email === admin.email && usuario.password === admin.password) {
      sessionStorage.setItem("inicioRollingCooking", JSON.stringify(usuario.email));
      return true;
    } else {
      return false;
    }
  };