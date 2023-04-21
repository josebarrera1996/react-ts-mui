import * as yup from "yup";

// Definiendo la validación para el formulario en LoginPage
export const LoginValidate = yup.object().shape({
    // Validando los siguientes campos
    username: yup.string().trim().required("El username es requerido"), // Que sea de tipo string, que elimine los espacios (del principio y final) y que sea requerido
    password: yup.string().trim().required("El password es requerido") // Que sea de tipo string, que elimine los espacios (del principio y final) y que sea requerido
});