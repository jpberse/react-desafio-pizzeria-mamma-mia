import { useState } from "react";
import { useCart } from "../hooks/useCart.js";
import { useUser } from "../hooks/useUser.js";

const Cart = () => {
	const { cart, total, aumentarCantidad, disminuirCantidad, limpiarCarro } =
		useCart();
	const [message, setMessage] = useState();
	const { token } = useUser();

	const handleCarrito = async () => {
		const cartToken = localStorage.getItem("token");

		setMessage("Procesando pago...");
		const response = await fetch(
			"https://simple-api-pizzeria-mamma-mia.onrender.com/api/checkouts",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${cartToken}`,
				},
				body: JSON.stringify({
					cart: cart.map((item) => ({
						pizza: item.name,
						quantity: item.quantity,
					})),
				}),
			},
		);

		const data = await response.json();
		if (data?.error) {
			setMessage(data.error);
		} else {
			setMessage("¡Gracias por tu compra!");
		}

		console.log(data);
	};

	return (
		<div className="flex items-center justify-center h-screen bg-[#e0e0e0]">
			<section className="w-4/5 sm:w-60 md:w-[600px] xl:w-[900px] h-screen flex flex-col items-center justify-center gap-4">
				<div className="flex w-full md:w-[70%] items-center justify-between">
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900">
						Your Shopping Cart
					</h2>
					<button
						className={`text-red-500 border-red-500 hover:text-white font-medium rounded-lg text-sm ${cart.length === 0 ? "hidden" : ""} px-2 py-1 text-center border-2 border-dashed transition duration-300 ease-in-out hover:bg-red-500/70`}
						type="button"
						onClick={() => {
							limpiarCarro();
						}}
					>
						Remove all
					</button>
				</div>
				<ul className="flex flex-col gap-2 w-full sm:w-5/6 md:w-5/6 py-4 items-center justify-center h-auto">
					{cart.length === 0 ? (
						<span className="text-3xl font-semibold text-gray-900 py-24">
							empty cart
						</span>
					) : (
						cart.map((pizza) => {
							return (
								<li
									key={pizza.id}
									className="w-full sm:w-5/6 h-auto flex items-center justify-between text-center gap-4 sm:gap-1 m-2 md:p-4 border-1 rounded-lg shadow-md"
								>
									<div className="flex items-center sm:gap-2">
										<img
											src={pizza.img}
											alt=""
											className="size-16 sm:size-20 rounded-md drop-shadow-md object-cover"
										/>
										<span className="pl-2 text-xs sm:text-xl font-semibold text-gray-900">
											Pizza {pizza.name}
										</span>
									</div>
									<div className="flex items-center">
										<button
											type="button"
											onClick={() => {
												disminuirCantidad(pizza);
												setMessage("");
											}}
											className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white w-6 h-6 sm:w-8 sm:h-8 border border-red-500 hover:border-transparent rounded-full text-sm sm:text-lg text-center items-center justify-center"
										>
											-
										</button>
										<span className="text-sm sm:text-xl font-semibold text-gray-900 px-2">
											{pizza.quantity}
										</span>
										<button
											type="button"
											onClick={() => {
												aumentarCantidad(pizza);
												setMessage("");
											}}
											className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-6 h-6 sm:w-8 sm:h-8 border border-blue-500 hover:border-transparent rounded-full text-xs sm:text-lg text-center items-center justify-center"
										>
											+
										</button>
										<span className="text-xl font-semibold text-gray-900 px-2">
											${pizza.price.toLocaleString()}
										</span>
									</div>
								</li>
							);
						})
					)}
					<div className="flex flex-col items-end justify-center gap-2 w-full">
						<span className="text-3xl font-semibold text-gray-900 pt-4">
							Total: ${total.toLocaleString()}
						</span>
						{token && (
							<button
								type="button"
								className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-2xl px-8 py-1 me-2 mb-2"
								onClick={handleCarrito}
							>
								Checkout
							</button>
						)}
					</div>
					{message && (
						<span className="text-3xl font-semibold text-gray-900 pt-4">
							{message}
						</span>
					)}
				</ul>
			</section>
		</div>
	);
};

export default Cart;
