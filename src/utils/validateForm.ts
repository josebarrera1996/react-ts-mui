import * as yup from "yup";

// Definiendo la validación para el formulario en LoginPage
export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required("El username es requerido"),
    password: yup.string().trim().required("El password es requerido"),
});