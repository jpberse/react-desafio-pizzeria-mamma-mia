import { Link } from "react-router-dom";
import {
	MdAddShoppingCart,
	MdOutlineRemoveShoppingCart,
	MdMoreHoriz,
} from "react-icons/md";

const CardPizza = ({
	id,
	img,
	name,
	ingredients,
	price,
	agregarAlCarro,
	removerDelCarro,
	isProductInCart,
}) => {
	const addCartToggleClass = isProductInCart
		? "text-white w-16 h-12 sm:w-24 sm:h-16 max-w-[300px] sm:max-w-[250px] flex justify-center items-center bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg sm:text-xl md:text-2xl px-4 sm:px-5 py-2 sm:py-2.5 me-2 mb-2"
		: "text-white w-16 h-12 sm:w-24 sm:h-16  max-w-[300px] sm:max-w-[250px] flex justify-center items-center bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg sm:text-xl md:text-2xl px-4 sm:px-5 py-2 sm:py-2.5 me-2 mb-2";

	const addCartToggleIcon = isProductInCart ? (
		<MdOutlineRemoveShoppingCart className="cursor-pointer text-4xl" />
	) : (
		<MdAddShoppingCart className="cursor-pointer text-4xl" />
	);

	return (
		<article
			className="w-[80%] h-full sm:w-full max-w-none sm:max-w-lg md:max-w-xl pb-4 bg-[#e0e0e0] rounded-lg"
			style={{ boxShadow: "15px 15px 25px #bebebe, -15px -15px 25px #ffffff" }}
		>
			<div>
				<img
					className="rounded-t-lg w-full h-80 object-cover"
					src={img}
					alt={`Imagen de una pizza ${name}`}
				/>
			</div>
			<div className="h-50 px-5 pb-5 flex flex-col items-center gap-1 sm:gap-4">
				<div>
					<h5 className="text-xl md:text-4xl font-semibold text-gray-900 pt-4">
						Pizza {name}
					</h5>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<h4 className="text-gray-600 text-xl sm:text-2xl font-light pt-4">
						Ingredientes:
					</h4>
					<ul className=" text-lg sm:text-2xl text-center flex flex-wrap justify-center gap-2">
						{ingredients.map((ingredient, index) => (
							<li key={ingredient}>
								{ingredient}
								{index < ingredients.length - 1 && ","}
							</li>
						))}
					</ul>
				</div>
				<span className="text-2xl sm:text-3xl md:text-4xl text-center pt-2 pb-1 sm:pb-6 border-b-2 border-black/15 w-full max-w-xl">
					Precio: ${price.toLocaleString()}
				</span>
				<div className="flex flex-row items-center justify-around gap-4 pt-6 w-full">
					<Link to={`pizza/${id}`}>
						<button
							type="button"
							className="w-16 h-12 sm:w-24 sm:h-16 max-w-[300px] sm:max-w-[250px] flex justify-center items-center bg-[#e0e0e0bc] border-2 border-black/25 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg sm:text-xl md:text-2xl px-4 sm:px-5 py-2 sm:py-2.5 me-2 mb-2"
						>
							<MdMoreHoriz className="cursor-pointer text-4xl" />
						</button>
					</Link>
					<button
						type="button"
						onClick={isProductInCart ? removerDelCarro : agregarAlCarro}
						className={addCartToggleClass}
					>
						{addCartToggleIcon}
					</button>
				</div>
			</div>
		</article>
	);
};

export default CardPizza;
