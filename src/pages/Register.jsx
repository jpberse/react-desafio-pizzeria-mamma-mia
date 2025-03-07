import { useState } from "react";
import { useInput } from "../hooks/useInput";
import { useUser } from "../hooks/useUser";

function Register() {
	const { postRegister, error } = useUser();
	const email = useInput("");
	const password = useInput("");
	const URL =
		"https://simple-api-pizzeria-mamma-mia.onrender.com/api/auth/register";
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage("");

		try {
			const data = await postRegister(URL, email.value, password.value);
			console.log(data);

			if (data.error) {
				setMessage(data.error);
			} else {
				setMessage("¡Usuario registrado con exito!");
				email.resetValue();
				password.resetValue();
			}
		} catch (error) {
			setMessage(error.message || "Ocurrio un error inesperado");
		}
	};

	return (
		<div className="h-screen bg-[#e0e0e0] flex items-center justify-center p-6 space-y-4">
			<section
				className="w-full max-w-lg pb-4 bg-[#e0e0e0] rounded-lg h-[70%] flex flex-col items-center justify-center text-gray-900"
				style={{
					boxShadow: "15px 15px 30px #bebebe, -15px -15px 30px #ffffff",
				}}
			>
				<h2 className="text-3xl text-start font-bold leading-tight tracking-tight mb-6">
					¡Registrate!
				</h2>
				<form
					className="w-full max-w-md flex flex-col items-start justify-center"
					onSubmit={handleSubmit}
				>
					<label className="block mb-2 text-lg font-medium">Email</label>
					<input
						className="bg-gray-50  border border-gray-300 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4"
						type="email"
						name="email"
						placeholder="shifu@pizza.cl"
						{...email}
						onClick={() => setMessage("")}
					/>
					<label className="block mb-2 text-lg font-medium">Contraseña</label>
					<input
						className="bg-gray-50 border border-gray-300 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-8"
						type="password"
						placeholder="******"
						{...password}
						onClick={() => setMessage("")}
					/>
					<button
						className="w-full bg-orange-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mb-4"
						type="submit"
					>
						Registrar
					</button>
				</form>
				{error ? (
					<span className="text-red-700 font-medium text-lg text-center underline decoration-2">
						{message}
					</span>
				) : (
					<span className="text-green-600 font-medium text-lg text-center underline decoration-2">
						{message}
					</span>
				)}
			</section>
		</div>
	);
}

export default Register;
