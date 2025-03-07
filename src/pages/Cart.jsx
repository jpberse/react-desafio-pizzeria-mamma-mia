import { useState } from "react";
import { useCart } from "../hooks/useCart.js";
import { useUser } from "../hooks/useUser.js";

const Cart = () => {
	const { cart, total, aumentarCantidad, disminuirCantidad } = useCart();
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
		<section className="w-full h-screen flex flex-col items-center justify-center gap-4">
			<h2 className="text-3xl font-semibold text-gray-900 pt-4">
				Detalles del Pedido:
			</h2>
			<ul
				className="flex flex-col gap-2 w-full max-w-xl py-4 bg-[#e0e0e0] rounded-lg items-center justify-center h-auto"
				style={{
					boxShadow: "15px 15px 25px #bebebe, -15px -15px 25px #ffffff",
				}}
			>
				{cart.map((pizza) => {
					return (
						<li
							key={pizza.id}
							className="w-full h-20 flex items-center justify-between text-center gap-2 px-4"
						>
							<div className="flex items-center gap-2">
								<img
									src={pizza.img}
									alt=""
									className="size-20 rounded-md drop-shadow-md object-cover"
								/>
								<span className="text-xl font-semibold text-gray-900">
									Pizza {pizza.name}
								</span>
							</div>
							<div className="flex items-center">
								<span className="text-xl font-semibold text-gray-900 px-2">
									${pizza.price.toLocaleString()}
								</span>
								<button
									onClick={() => {
										disminuirCantidad(pizza);
										setMessage("");
									}}
									className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded"
								>
									-
								</button>
								<span className="text-xl font-semibold text-gray-900 px-2">
									{pizza.quantity}
								</span>
								<button
									onClick={() => {
										aumentarCantidad(pizza);
										setMessage("");
									}}
									className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
								>
									+
								</button>
							</div>
						</li>
					);
				})}
			</ul>
			<span className="text-3xl font-semibold text-gray-900 pt-4">
				Total: ${total.toLocaleString()}
			</span>
			{token && (
				<button
					className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2"
					onClick={handleCarrito}
				>
					Pagar
				</button>
			)}
			{message && (
				<span className="text-3xl font-semibold text-gray-900 pt-4">
					{message}
				</span>
			)}
		</section>
	);
};

export default Cart;
