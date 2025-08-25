import FormularioColor from "./components/FormularioColor";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaColores from "./components/ListaColores";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const colorLocalStorage = JSON.parse(localStorage.getItem("listaColores")) || [];
  const [colores, setColores] = useState(colorLocalStorage);

  const agregarColor = (nuevoColor)=> {
    const nuevo = {id: uuidv4(), nombreColor: nuevoColor}
    setColores([...colores, nuevo])
  }

  const borrarColor = (id)=> {
    setColores(colores.filter(c => c.id !== id));
    console.log(id)
  }

  useEffect(()=> {
    localStorage.setItem("listaColores", JSON.stringify(colores))
  }, [colores])

  return (
    <>
      <main className="container">
        <h1 className="text-center text-light my-5">
          Bienvenido al frontend de paleta de Colores
        </h1>
        <section className="container my-5 bg-body-tertiary rounded-3">
          <FormularioColor agregarColor={agregarColor} />
        </section>
      </main>
      <Row className="container-fluid row-gap-3">
        {
          colores.map((color)=> 
            <ListaColores key={color.id} color={color} borrarColor={()=> borrarColor(color.id)} />
          )
        }
      </Row>
    </>
  );
}

export default App;
