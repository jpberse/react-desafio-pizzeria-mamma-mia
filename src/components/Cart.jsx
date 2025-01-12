import React from 'react'
import { useState } from 'react'
import { pizzaCart } from '../mock/pizzas'

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart)
    const [total, setTotal] = useState(19190)

    const aumentarCantidad = (pizza) => {
        const nuevaCantidad = [...cart];
        const index = nuevaCantidad.findIndex(ele => ele.id === pizza.id);
        let total = 0
        nuevaCantidad[index].count++;
        nuevaCantidad.forEach(ele => {
            total += ele.price * ele.count });
        setCart(nuevaCantidad);
        setTotal(total)
    }

    const disminuirCantidad = (pizza) => {
        const nuevaCantidad = [...cart];
        const index = nuevaCantidad.findIndex(ele => ele.name === pizza.name);
        nuevaCantidad[index].count--;
        let total = 0
        nuevaCantidad.forEach(ele => {
            total += ele.price * ele.count });
        if(nuevaCantidad[index].count <= 0) {
            nuevaCantidad.splice(index, 1);
        }
        setCart(nuevaCantidad);
        setTotal(total);
    }

    

    return (
        <section className="w-full h-screen flex flex-col items-center justify-center gap-4">
                <h2 className='text-3xl font-semibold text-gray-900 pt-4'>Detalles del Pedido:</h2>
                <ul className='flex flex-col gap-2 w-full max-w-xl pb-4 bg-[#e0e0e0] rounded-lg items-center justify-center h-1/2'
                    style={{ boxShadow: '15px 15px 25px #bebebe, -15px -15px 25px #ffffff' }}>
                    { cart.map(pizza => {
                        return(
                        <li key={pizza.id} className='w-full h-20 flex items-center justify-between text-center gap-2 px-4'>
                            <div className='flex items-center gap-2'>
                                <img src={pizza.img} alt="" className='size-20 rounded-md drop-shadow-md object-cover'/>
                                <span className='text-xl font-semibold text-gray-900'>Pizza {pizza.name}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-xl font-semibold text-gray-900 px-2'>${pizza.price.toLocaleString()}</span>
                                <button onClick={() => disminuirCantidad(pizza)} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded'>-</button>
                                <span className='text-xl font-semibold text-gray-900 px-2'>{pizza.count}</span>
                                <button onClick={() => aumentarCantidad(pizza)} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'>+</button>
                            </div>
                        </li>
                        )
                    }
                    )}
                </ul>
                <span className='text-3xl font-semibold text-gray-900 pt-4'>Total: ${total.toLocaleString()}</span>
                <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2'>Pagar</button>
        </section>
    )
}

export default Cart