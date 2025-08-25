import FormularioColor from "./components/FormularioColor";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaColores from "./components/ListaColores";
import { Row } from "react-bootstrap";

function App() {
  return (
    <>
      <main className="container">
        <h1 className="text-center text-light my-5">
          Bienvenido al frontend de paleta de Colores
        </h1>
        <section className="container my-5 bg-body-tertiary rounded-3">
          <FormularioColor />
        </section>
      </main>
      <Row className="container-fluid">
        <ListaColores />
        <ListaColores />
        <ListaColores />
        <ListaColores />
      </Row>
    </>
  );
}

export default App;
