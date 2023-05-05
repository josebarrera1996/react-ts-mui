import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Typography
} from "@mui/material";

// Definiendo en un 'type' las propiedades de este componente
type CardProps = {
    image: string;
    name: string
    species: string
    status: string
    id: number;
}

// Componente funcional que representará un Card
export const CardComponent: React.FC<CardProps> = ({ image, name, species, status, id }) => {

    // Utilizando 'useNavigate' para manejar la navegación
    let navigate = useNavigate();

    return (
        <Card>
            <CardMedia component="img" height="194" image={image} alt="Paella dish" />
            <CardContent>
                <Typography variant="h4" sx={{ mb: 1.5 }}>
                    {name}
                </Typography>
                <Divider />
                <Typography sx={{ mt: 1.5 }}>Especie: {species}</Typography>
                <Typography sx={{ mt: 1.5 }}>Estado: {status}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    fullWidth
                    variant="contained"
                    size="small"
                    onClick={() => navigate(`/character/${id}`)}
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}