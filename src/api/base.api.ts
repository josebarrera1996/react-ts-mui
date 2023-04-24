import axios from "axios"

// Estructura base de la API con la que trabajaremos
const BASE_URL = "https://rickandmortyapi.com/api"

// Creando una instancia para poder trabajar con esta API
export const instance = axios.create({
    baseURL: BASE_URL
});