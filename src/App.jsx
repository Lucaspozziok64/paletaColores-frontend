import FormularioColor from "./components/FormularioColor"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <h1 className="text-center">Bienvenido al frontend de paleta de Colores</h1>
      <section className="container my-5 bg-primary">
        <FormularioColor />
      </section>
    </>
  )
}

export default App
