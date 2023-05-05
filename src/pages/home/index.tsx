import React from "react";
import { Box, CircularProgress, Button, Container, Grid, Pagination } from "@mui/material";
import { HeaderComponent, CardComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

// Componente de tipo funcional que representará la página de inicio
export const HomePage: React.FC = () => {

  // Utilizando 'useState' para manejar los siguientes estados
  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null); // Empleando 'TypeCharacter[]' para manejar las propiedades de los personajes en un arreglo
  const [loading, setLoading] = React.useState<boolean>(true); // Para manejar si se están cargando o no los datos de la API

  // Utilizando 'useState' para manejar los estados de la paginación
  const [page, setPage] = React.useState(1); // Para cambiar las páginas
  const [count, setCount] = React.useState(1); // Para realizar el conteo de páginas

  // Utilizando 'useEffect' para lograr cargar los datos de la API
  // Cargando los personajes de la primera página (por defecto)
  React.useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((r) => {
        // Obteniendo el nro total de páginas
        setCount(r.data.info.pages);
        // Obteniendo los personajes
        setAllCharacters(r.data.results);
        // Cargando los datos...
        setTimeout(() => setLoading(false), 1000); // Duración del spinner (1 segundo)
      })
      .catch((e) => {
        console.error(e);
      });
  }, [page]); // Renderizar este componente por cada vez que se cambie de página

  // Método para poder actualizar el estado de 'page' y con ello, cambiar la página
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
      {/* Si no se han cargado los datos... */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        // Si ya están cargados...
        <>
          <div>
            {allCharacters!.length !== 0 ? (
              <Grid sx={{ my: 2 }} container spacing={2} direction="row">
                {allCharacters!.map((character) => (
                  <Grid item xs={3} key={character.id}>
                    <CardComponent
                      // key={character.id}
                      image={character.image}
                      name={character.name}
                      species={character.species}
                      status={character.status}
                      id={character.id}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              "No data"
            )}
          </div>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pagination
              variant="outlined"
              color="primary"
              count={count}
              page={page}
              onChange={handleChange}
              sx={{ mb: 3 }}
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
};