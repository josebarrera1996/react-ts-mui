import { instance } from "./base.api";

// Recurso de la API a utilizar
const endpoint = "character";

// En este archivo se trabajará con los 'characters' de Rick and Morty
export const characters = {

    // Método para traer a todos los personajes
    // Posibilidad de utilizar la paginación para traer los resultados dependiendo de la página pasada
    getAll: function ({ page }: { page?: number }) {
        return instance.get(endpoint, {
            // Parámetros
            params: {
                page
            }
        })
    },

    // Método para traer a un personaje en específico (gracias a su ID)
    getById: function ({ id }: { id: number }) {
        return instance.get(`${endpoint}/${id}`)
    }
}

