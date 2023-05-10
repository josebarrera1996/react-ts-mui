import React from 'react';
import {
    AppBar,
    Badge,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { CartComponent } from './Cart';
import { useAppSelector } from '../redux/hooks';

// Componente funcional que representará a un menú de navegación
export const NavBar: React.FC<{}> = () => {

    // Utilizando 'useNavigate' para manejar la navegación
    const navigate = useNavigate();

    // Utilizando el Hook tipado de 'useSelector'
    const items = useAppSelector((state) => state.cartReducer);

    // Utilizando 'useState' para poder abrir o cerrar el Carrito
    const [open, setOpen] = React.useState<boolean>(false);

    // Método para poder actualizar el siguiente estado y así abrir o cerrar el Carrito
    const handleStateViewDrawer = () => {
        setOpen((state) => !state);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography>Codrr</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleStateViewDrawer()}
                                    >
                                        <Badge color="error" badgeContent={items.length}>
                                            <ShoppingCartOutlinedIcon />
                                        </Badge>
                                    </IconButton>
                                    <Button variant="contained" onClick={() => navigate('login')}>
                                        Login
                                    </Button>
                                    <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <CartComponent
                open={open}
                handleStateViewDrawer={handleStateViewDrawer}
            />
        </Box>
    );
};