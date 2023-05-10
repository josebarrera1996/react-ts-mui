import React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useAppDispatch } from '../../redux/hooks';
import { removeToCart } from '../../redux/slices/cart.slice';

// Definiendo las propiedades de este componente
interface CardHorizntalComponentProps {
    id: string | number;
    image: string;
    name: string;
    info: string;
}

// Componente funcional que representará la sección horizontal en donde observar los items del carrito
export const HorizontalCardComponent: React.FC<CardHorizntalComponentProps> = ({
    id,
    image,
    name,
    info,
}) => {

    // Utilizando el Hook tipado de 'useDispatch'
    const dispatch = useAppDispatch();

    // Método para remover los items del carrito (al acceder a sus respectivos IDs)
    const handleRemoveToCart = () => {
        dispatch(removeToCart({ id }));
    };

    return (
        <Card sx={{ display: 'flex', my: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={image}
                alt="Rick and Morty"
            />
            <Grid container sx={{ mx: 1 }}>
                <Grid item xs={9}>
                    <CardContent>
                        <Typography variant="h4">{name}</Typography>
                        <Divider />
                        <Typography variant="h6">{info}</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={2}>
                    <CardActions>
                        <IconButton onClick={handleRemoveToCart}>
                            <CloseRoundedIcon />
                        </IconButton>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    );
};