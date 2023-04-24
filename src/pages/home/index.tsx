import React from "react";
import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components/Header";
import { characters } from "../../api/characters";

// Componente de tipo funcional que representará la página de inicio
export const HomePage: React.FC<{}> = () => {

  // Utilizando 'useEffect' para lograr cargar los datos de la API
  React.useEffect(() => {
    characters.getById({ id: 1 }).then((r) => {
      console.log(r.data)
    }).catch((e) => {
      console.error(e)
    })
  }, []);

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