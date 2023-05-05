import React from "react";
import { useParams } from "react-router-dom";
import { characters } from "../../api/characters";
import { ICharacter } from "./interface/character.interface";
import { Box, Chip, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material";

// Componente funcional que servirá para representar a un personaje en particular
export const CharacterPage: React.FC = () => {

    // Utilizando 'useParams' para obtener el parámetro 'ID'
    const { id } = useParams();
    console.log(id);

    /* Utilizando 'useState' para manejar los siguientes estados */
    const [loading, setLoading] = React.useState<boolean>(true); // Para manejar la carga de los datos
    const [character, setCharacter] = React.useState<ICharacter | null>(null); // Para manejar el estado del personaje

    // Utilizando 'useEffect' para cargar los datos del personaje en específico
    React.useEffect(() => {
        characters
            .getById({ id }) // Invocando el método para obtener los datos
            .then((r) => {
                // Actualizando los estados
                setCharacter(r.data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <Box sx={{ width: "100%" }}>
            <Container maxWidth="xl">
                {/* Si se están cargando los datos... */}
                {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    // Si ya se han cargado...
                    <Grid sx={{ mt: 2 }} container columnSpacing={2}>
                        <Grid item xs={6}>
                            <Typography variant='h1' >{character!.name}</Typography>
                            <Divider />
                            <Typography variant="h6">{character!.origin.name}</Typography>
                            <Box sx={{ mt: 2 }}>
                                <Chip color="primary" variant="outlined" label={character!.status} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={character!.image} style={{ width: "100%", borderRadius: "0.5em" }} />
                        </Grid>
                    </Grid>
                )}
            </Container>
        </Box>
    );
}