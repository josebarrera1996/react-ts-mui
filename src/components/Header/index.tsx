import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

// Definiendo en este type las propiedades de este componente
type HeaderProps = {
    title: string;
    description: string;
    element?: React.ReactNode | null;
};

// Componente funcional, creado con la finalidad de ser compartido
// Recibirá 3 parámetros: 2 que son obligatorios y 1 que es opcional (será un componente)
export const HeaderComponent: React.FC<HeaderProps> = ({ title, description, element }) => {
    
    return (
        <div>
            <Box sx={{ width: "100%", height: "350px" }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100%" }}
                >
                    <Grid item xs={5}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ height: "100%" }}
                        >
                            <Grid item>
                                <Typography variant="h1">{title}</Typography>
                            </Grid>
                            <Grid item sx={{ mt: 2 }}>
                                <Typography>{description}</Typography>
                            </Grid>
                            {/* Componente a renderizar (opcional) */}
                            {element !== undefined && (
                                <Grid sx={{ mt: 4, width: "100%" }} item>
                                    {element}
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    );
};