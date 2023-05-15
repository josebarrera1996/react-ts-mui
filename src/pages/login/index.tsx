import React from "react";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import { useFormik } from 'formik';

// Definiendo el type de Login con las propiedades (que servirán como estado) a utilizar
type LoginType = {
  username: string;
  password: string
}

// Componente de tipo funcional que representará la sección para poder logearse
// No implementará el navbar
export const LoginPage: React.FC<{}> = () => {

  // Utilizando el custom hook 'useNotification'
  const { getSuccess } = useNotification();

  // Utilizando 'useFormik' para implementar las validaciones en los campos requeridos
  const formik = useFormik<LoginType>({
    // Valores iniciales de los campos 'input'
    initialValues: {
      username: '',
      password: '',
    },
    // Validación con Yup
    validationSchema: LoginValidate, 
    // Método para enviar los datos (no sin antes de comprobar las respetivas validaciones)
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values));
    },
  });

  /*
  // Utilizando 'useState' para manejar los siguientes estados 
  const [loginData, setLoginData] = React.useState<LoginType>({
    username: "",
    password: "",
  });

  // Actualizando los estados según lo ingresado en el formulario
  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Asignando los valores ingresados a los campos especificados en el 'name' de los inputs
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  
  // Método para enviar lo obtenido en el formulario
  // Se aplicará una validación en los campos del formulario
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault(); // Evitar que la página se recargue

    // Implementando la validación
    LoginValidate.validate(loginData)
      .then(() => {
        // En caso de éxito...
        getSuccess(JSON.stringify(loginData));
      })
      .catch((error) => {
        // En caso de error...
        getError(error.message);
      });
  };
  */

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar sesion
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <TextField
                name="username"
                margin="normal"
                type="text"
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};