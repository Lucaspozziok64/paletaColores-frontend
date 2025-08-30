import FormularioColor from "./components/FormularioColor";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaColores from "./components/ListaColores";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const colorLocalStorage =
    JSON.parse(localStorage.getItem("listaColores")) || [];
  const [colores, setColores] = useState(colorLocalStorage);
  const [colorEditando, setColorEditando] = useState(null);

  const agregarColor = (nuevoColor) => {
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
    setColores([...colores, nuevo]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Color agregado exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
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

  useEffect(() => {
    localStorage.setItem("listaColores", JSON.stringify(colores));
  }, [colores]);

  return (
    <>
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
          {colores.map((color) => (
            <ListaColores
              key={color.id}
              color={color}
              borrarColor={() => borrarColor(color.id)}
              setColorEditando={setColorEditando}
            />
          ))}
        </Row>
      </main>
    </>
  );
}

export default App;
