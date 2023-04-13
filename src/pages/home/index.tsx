import React from "react";
import { Button, Container } from "@mui/material";

// Componente de tipo funcional que representará la página de inicio
export const HomePage: React.FC<{}> = () => {

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button fullWidth variant="contained">
        Estamos en home
      </Button>
    </Container>
  );
};