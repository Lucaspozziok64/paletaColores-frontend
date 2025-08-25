import FormularioColor from "./components/FormularioColor";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <main>
        <h1 className="text-center text-light my-5">
          Bienvenido al frontend de paleta de Colores
        </h1>
        <section className="container my-5 bg-body-tertiary rounded-3">
          <FormularioColor />
        </section>
      </main>
    </>
  );
}

export default App;
