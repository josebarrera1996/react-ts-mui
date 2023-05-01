import React from "react";
import { Button, Container, Grid } from "@mui/material";
import { HeaderComponent, CardComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

// Componente de tipo funcional que representará la página de inicio
export const HomePage: React.FC<{}> = () => {

  // Utilizando 'useState' para manejar el siguiente estado
  // Empleando 'TypeCharacter[]' para manejar las propiedades de los personajes en un arreglo
  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null);

  // Utilizando 'useEffect' para lograr cargar los datos de la API
  // Cargando los personajes de la primera página
  React.useEffect(() => {
    characters.getAll({ page: 1 }).then((r) => {
      // console.log(r.data.results);
      setAllCharacters(r.data.results);
    }).catch((e) => {
      console.error(e);
    })
  }, []);

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Hola mundo bienvenido a Codrr"
        element={
          <Button fullWidth variant="contained">
            Hola mundo
          </Button>
        }
      />
      <div>
        {
          allCharacters?.length !== 0 ? (
            <Grid container spacing={2} direction="row">
              {allCharacters?.map((character) => (
                <Grid item xs={3} key={character.id}>
                  <CardComponent image={character.image} name={character.name} species={character.species} status={character.status} />
                </Grid>
              ))}
            </Grid>
          ) : ""
        }
      </div>
    </Container>
  );
};