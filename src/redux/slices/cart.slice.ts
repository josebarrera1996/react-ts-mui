import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getItem } from '../../utils/localStorage';

// Interfaz para definir las propiedades del State del Carrito al añadir items
interface CartAddState {
    id: string | number;
    name: string;
    image: string;
    info: string;
}

// Interfaz para definir la propiedad del State del Carrito para remover items
interface CartRemoveState {
    id: string | number;
}

// Definiendo el estado inicial
// Las propiedades serán rellenadas por lo almacenado en el LocalStorage
const initialState: CartAddState[] = getItem('cart') || [];

// Definiendo el Slice para el Carrito
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // Definiendo los métodos del reducer
    reducers: {
        // Método para añadir items al carrito
        addToCart: (state, action: PayloadAction<CartAddState>) => {
            const { id } = action.payload;
            if (
                state.length === 0 ||
                state.filter((item) => item.id === id).length === 0
            ) {
                state.push(action.payload);

            }
        },
        // Método para remover items del carrito
        removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
            const { id } = action.payload;
            if (state.some((item) => item.id === id)) {
                return state = state.filter((item) => item.id !== id)
            }
        },
    },
});

// Exportando las acciones para que puedan ser utilizadas por el reducer
export const { addToCart, removeToCart } = cartSlice.actions;