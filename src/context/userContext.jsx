import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [token, setToken] = useState(false);
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const postLogin = async (url) => {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await response.json();
		if (data?.error) {
			setError(true);
			setMessage(data.error);
		} else {
			setError(false);
			setMessage("Ingreso exitoso");
			localStorage.setItem("token", data.token);
			setToken(true);
		}
	};

	const postRegister = async (url, email, password) => {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});

		const data = await response.json();
		if (data?.error) {
			setError(true);
		} else {
			setError(false);
		}

		return data;
	};

	const logout = () => {
		localStorage.removeItem("token");
		setToken(false);
	};

	const authenticationProfile = async (token, setUser) => {
		fetch("https://simple-api-pizzeria-mamma-mia.onrender.com/auth/me", {
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => setUser(data));
	};

	return (
		<UserContext.Provider
			value={{
				token,
				logout,
				postLogin,
				postRegister,
				authenticationProfile,
				email,
				setEmail,
				password,
				setPassword,
				error,
				message,
				setMessage,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
