const urlColores = import.meta.env.API_VITE_COLORES

console.log(urlColores);

export const leerColores = async () => {
    try {
        const respuesta = await fetch(urlColores)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const borrarColoresPorId = async (id) => {
    try {
        const respuesta = await fetch(urlColores + `/${id}`, {
            method: 'DELETE',
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const crearColor = async (colorNuevo) => {
    try {
        const respuesta = await fetch(urlColores, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(colorNuevo)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const obtenerColorPorId = async (id) => {
    try {
        const respuesta = await fetch(urlColores + `/${id}`)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const editarColorPorId = async (id, colorEditado) => {
    try {
        const respuesta = await fetch(urlColores + `/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(colorEditado)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}