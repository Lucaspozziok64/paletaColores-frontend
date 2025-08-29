import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const FormularioColor = ({ agregarColor, colorEditando, setColorEditando, setColores, colores }) => {
  const [colorInput, setColorInput] = useState("");

  useEffect(()=> {
      if(colorEditando && colorEditando.nombreColor) {
        setColorInput(colorEditando.nombreColor);
    }
  }, [colorEditando])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(colorInput)
    if (!colorInput.trim()) {
      Swal.fire({
        title: "Debes elegir un color, haciendo click en el recuadro del input",
        text: "Asi no funciona!😉",
        icon: "warning",
      });
      return;
    }
    if(colorEditando) {
      const coloresActualizados = colores.map((color)=>
          color.id === colorEditando.id
          ? { ...color, nombreColor: colorInput }
          : color
        );
        setColores(coloresActualizados)
        setColorEditando(null)
        setColorInput('');
        Swal.fire({
        icon: "success",
        title: "Color editado correctamente",
        timer: 1500,
        showConfirmButton: false,
      });

    } else {
      agregarColor(colorInput)
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
      <div className="w-100 text-center">
        <h2 className="w-100">🎨Paleta de colores🎨</h2>
        <div className="d-flex justify-content-center align-items-center mb-1">
          <label className="form-label">
            <strong>Selecciona un Color:</strong>
          </label>
          <input
            type="color"
            className="mx-3 mb-1"
            onChange={(e) => setColorInput(e.target.value)}
            value={colorInput || "#000000"} // fallback si el valor es vacío
          />
          <button type="submit" className="btn btn-success botonAgregar">
            <i className="bi bi-plus-circle mx-1 text-white"></i>{colorEditando ? "Guardar cambios" : "Agregar"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormularioColor;
