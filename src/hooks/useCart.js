import { useContext } from 'react';
import { CartContext } from '../context/cartContext.jsx'

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error('falta el provider');
    }

    return context;
}