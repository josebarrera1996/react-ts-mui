import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart } from '../../redux/slices/cart.slice';
import { setItem } from '../../utils/localStorage';

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

    // Utilizando 'useState' para manejar la visibilidad del botón para añadir items
    const [disabledBtn, setDisabledBtn] = React.useState<boolean>(false);

    // Utilizando los Hooks tipados de 'useDispatch & 'useSelector'
    const dispatch = useAppDispatch();
    const itemExist = useAppSelector((state) => state.cartReducer);

    // Utilizando 'useEffect' para poder cargar los items y manejar la visibilidad del botón para añadir items al Carrito
    React.useEffect(() => {
        setDisabledBtn(itemExist.some((item) => item.id === id));
        setItem('cart', itemExist);
    }, [itemExist, id]);

    // Método para añadir items al Carrito
    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id,
                name,
                image,
                info: status,
            }),
        );
    };

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
                <Button
                    fullWidth
                    variant="outlined"
                    size="small"
                    disabled={disabledBtn}
                    onClick={handleAddToCart}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}