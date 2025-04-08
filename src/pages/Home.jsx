import { useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useCart } from "../hooks/useCart.js";

function Home() {
	const { getData, menu, cart, agregarAlCarro, removerDelCarro } = useCart();

	const checkPizzaInCart = (pizza) => {
		return cart.some((item) => item.id === pizza.id);
	};

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<main>
			<Header />
			<section className="bg-[#e0e0e0] grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] place-items-center gap-10 sm:gap-16 md:gap-20 sm:p-4 md:p-24 py-10">
				{menu.map((pizza) => {
					const isProductInCart = checkPizzaInCart(pizza);
					return (
						<CardPizza
							key={pizza.id}
							{...pizza}
							isProductInCart={isProductInCart}
							agregarAlCarro={() => agregarAlCarro(pizza)}
							removerDelCarro={() => removerDelCarro(pizza)}
						/>
					);
				})}
			</section>
		</main>
	);
}

export default Home;
