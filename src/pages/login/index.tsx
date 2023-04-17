import React from "react";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";

// Definiendo el type de Login con las propiedades (que servirán como estado) a utilizar
type LoginType = {
  username: string;
  password: string
}

// Componente de tipo funcional que representará la sección para poder logearse
// No implementará el navbar
export const LoginPage: React.FC<{}> = () => {

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
  // De momento mostrar por consola
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault(); // Evitar que la página se recargue
    console.log(loginData);
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar sesion
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="username"
                margin="normal"
                type="text"
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={dataLogin}
              />
              <TextField
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={dataLogin}
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