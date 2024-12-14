import React from 'react'

function ButtonsNav({ name, icon }) {
    return (
        <button className='text-white text-lg font-light border-solid border border-white/50 rounded-md px-2'>{icon} {name}</button>
    )
}

export default ButtonsNav