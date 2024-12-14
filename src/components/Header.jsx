import React from 'react'

function Header() {
    return (
    <div className="relative bg-black w-screen h-80 flex flex-col justify-center items-center text-white">
        <div className="absolute inset-0 bg-[url('/src/assets/Header.jpg')] bg-cover bg-no-repeat opacity-35"></div>
        <div className="relative z-10 w-11/12 text-center border-white/25 border-b-2">
            <h1 className="text-5xl font-bold pb-2">¡Pizzeria Mamma Mia!</h1>
            <p className='pb-4'>¡Tenemos las mejores pizzas que podras encontrar!</p>
        </div>
    </div>
    )
}

export default Header