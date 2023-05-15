import * as yup from "yup";

// Definiendo la validación para el formulario en LoginPage
export const LoginValidate = yup.object().shape({
    // Validando los siguientes campos}
    username: yup.string().trim().required("El username es requerido"), // Que sea de tipo string, que elimine los espacios (del principio y final) y que sea requerido
    password: yup // Que sea de tipo string, que elimine lo espacios (del principio y final), que sea requerido, que como mínimo sean 4 caracteres y como máximo 20
        .string()
        .trim()
        .required('El password es requerido')
        .min(4, 'El minimo debe ser 4 caracteres')
        .max(20, 'El maximo debe ser 20 caracteres'),
});