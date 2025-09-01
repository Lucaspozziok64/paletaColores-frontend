import FormularioColor from "./components/FormularioColor";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaColores from "./components/ListaColores";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { crearColor, leerColores } from "./helpers/queries";

function App() {
  const colorLocalStorage =
    JSON.parse(localStorage.getItem("listaColores")) || [];
  const [colores, setColores] = useState(colorLocalStorage);
  const [colorEditando, setColorEditando] = useState(null);
  const [listaDeColores, setListaDeColores] = useState([]);

  useEffect(() => {
    obtenerColores();
  }, []);

  const obtenerColores = async () => {
    const respuesta = await leerColores();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaDeColores(datos);
    } else {
      console.log("Ocurrio un error al intentar leer los productos");
    }
  };

  const agregarColor = async (nuevoColor) => {
    const yaExiste = colores.some(
      (color) => color.nombreColor.toLowerCase() === nuevoColor.toLowerCase()
    );

    if (yaExiste) {
      Swal.fire({
        icon: "warning",
        title: "Color duplicado",
        text: "Ya existe un color con ese código",
      });
      return; // salimos sin agregar
    }
    const nuevo = { id: uuidv4(), nombreColor: nuevoColor };
    setListaDeColores([...listaDeColores, nuevo]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Color agregado exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });

    const respuesta = await crearColor(nuevo);
    if (respuesta.status === 201) {
      await obtenerColores()
      Swal.fire({
        title: "Producto Creado!",
        text: `El producto ${nuevoColor.nombreColor} fue creado correctamente`,
        icon: "success",
      });
    }
  };

  const borrarColor = (id) => {
    Swal.fire({
      title: "Estas seguro/a de eliminar este color?",
      text: "No podras revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setColores(colores.filter((c) => c.id !== id));
        console.log(id);
        Swal.fire({
          title: "Eliminado!",
          text: "El color ha sido eliminado",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <nav dir="rtl" className="bg-dark text-light">
        <div className="texto-corredizo fs-5">
          😎¡ Elegi tu color favorito y obtene su nombre en Hexadecimal !🎨
        </div>
      </nav>
      <main className="container">
        <h1 className="text-center text-light my-5">
          Bienvenido a la aplicacion paleta de Colores
        </h1>
        <section className="container my-5 bg-body-tertiary rounded-3">
          <FormularioColor
            agregarColor={agregarColor}
            colorEditando={colorEditando}
            setColorEditando={setColorEditando}
            setColores={setColores}
            colores={colores}
          />
        </section>
        <Row className="container-fluid row-gap-4">
          {listaDeColores.map((color) => (
            <ListaColores
              key={color._id || color.id}
              color={color}
              borrarColor={() => borrarColor(color._id)}
              setColorEditando={setColorEditando}
            />
          ))}
        </Row>
      </main>
      <footer className="bg-dark text-center text-light p-2">
        <p className="mb-0">
          Desarrollado por{" "}
          <a href="https://github.com/Lucaspozziok64">Lucas Figueroa</a>👨‍💻
        </p>
      </footer>
    </>
  );
}

export default App;
