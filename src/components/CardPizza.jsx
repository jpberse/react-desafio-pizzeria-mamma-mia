import { Link } from 'react-router-dom';

const CardPizza = ({ id, img, name, ingredients, price, agregarAlCarro, removerDelCarro, isProductInCart }) => {
    const addCartToggleClass = isProductInCart ? "text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2" : "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2"
    
    const addCartToggleIcon = isProductInCart? '❌ Quitar' : '🛒 Añadir' 

    return (
        <article className="w-full max-w-xl pb-4 bg-[#e0e0e0] rounded-lg"
            style={{ boxShadow: '15px 15px 25px #bebebe, -15px -15px 25px #ffffff' }}
        >
            <a href="#">
                <img className="rounded-t-lg " src={img} alt={`Imagen de una pizza ${name}`}/>
            </a>
            <div className="px-5 pb-5 flex flex-col items-center gap-4">
                    <a href="#">
                        <h5 className="text-3xl font-semibold text-gray-900 pt-4">Pizza {name}</h5>
                    </a>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h4 className="text-gray-600 text-2xl font-light pt-4">Ingredientes:</h4>
                        <ul className="text-2xl text-center h-14 flex">
                            {ingredients.map((ingredient, index) => <li key={ingredient}>{ingredient}{index < ingredients.length -1 && ","}</li>)}
                        </ul>
                </div>
                <span className="text-4xl text-center pt-2 pb-6 border-b-2 border-black/15 w-full max-w-xl">Precio: ${price.toLocaleString()}</span>
                <div className="flex items-center justify-between gap-24 pt-6">
                    <Link to={`pizza/${id}`}>
                        <button type='button' className='text-gray-900 text-center bg-[#e0e0e0bc] border-2 border-black/25 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2'>Ver Más 👀</button>
                    </Link>
                    <button type='button' onClick={ isProductInCart? removerDelCarro : agregarAlCarro } className={addCartToggleClass}>{addCartToggleIcon}</button>
                </div>
            </div>
        </article>
    )
}

export default CardPizza