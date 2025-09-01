import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { editarColorPorId, leerColores } from "../helpers/queries";

const FormularioColor = ({
  agregarColor,
  colorEditando,
  setColorEditando,
  listaDeColores,
  setListaDeColores,
}) => {
  const [colorInput, setColorInput] = useState("");

  useEffect(() => {
    if (colorEditando && colorEditando.nombreColor) {
      setColorInput(colorEditando.nombreColor);
    }
  }, [colorEditando]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!colorInput.trim()) {
      Swal.fire({
        title: "Debes elegir un color, haciendo click en el recuadro del input",
        text: "Asi no funciona!😉",
        icon: "warning",
      });
      return;
    }
    const colorNuevo = colorInput.toLowerCase().trim();

    // Validar si el color ya existe en otro registro
    const duplicado = listaDeColores.some(
      (color) =>
        color.nombreColor.toLowerCase().trim() === colorNuevo &&
        color._id !== colorEditando._id // excluye el color que estás editando
    );

    if (duplicado) {
      Swal.fire({
        icon: "warning",
        title: "Color duplicado",
        text: "Ya existe un color con ese código. Elegí otro 😉",
      });
      return;
    }
    if (colorEditando) {
      const colorActualizado = { nombreColor: colorInput };

      const respuesta = await editarColorPorId(
        colorEditando._id,
        colorActualizado
      );
      if (respuesta && respuesta.status === 200) {
        const coloresActualizados = await leerColores();
        const lista = await coloresActualizados.json();
        setListaDeColores(lista);
        setColorEditando(null);
        setColorInput("");

        Swal.fire({
          icon: "success",
          title: "Color editado correctamente",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "No se pudo editar el color",
          text: "Verificá la conexión con la base de datos",
        });
      }
    } else {
      agregarColor(colorInput);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center align-items-center"
    >
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
            <i className="bi bi-plus-circle mx-1 text-white"></i>
            {colorEditando ? "Guardar cambios" : "Agregar"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormularioColor;
