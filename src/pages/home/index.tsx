import React from "react";
import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components/Header";

// Componente de tipo funcional que representará la página de inicio
export const HomePage: React.FC<{}> = () => {

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Hola mundo bienvenido a Codrr"
        element={
          // Componente a renderizar
          <Button fullWidth variant="contained">
            Hola mundo
          </Button>
        }
      />
    </Container>
  );
};