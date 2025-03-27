import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<section className="h-screen bg-[#e0e0e0] flex flex-col items-center justify-center gap-6">
			<h2 className="text-[200px] text-orange-500 font-bold ">¡Vaya!</h2>
			<span className="text-center text-4xl">
				No hemos podido encontrar la pagina que buscas
			</span>
			<strong className="text-center text-4xl font-light">
				codigo de error: 404
			</strong>
			<Link to="/">
				<button
					type="button"
					className="w-[80px] bg-orange-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg text-center py-2 px-4"
				>
					Home
				</button>
			</Link>
		</section>
	);
};
