import { useState } from "react";
import ButtonsNav from "./ButtonsNav";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";
import { useUser } from "../hooks/useUser.js";
import logo from "../assets/logo.png";

function Navbar() {
	const setActiveClass = ({ isActive }) =>
		isActive
			? "text-orange-400 text-lg font-light px-3 py-1 relative underline-animation active hidden md:inline-block"
			: "text-white hover:text-orange-400 text-lg font-light px-3 py-1 relative underline-animation hidden md:inline-block animate-[font-bold_1s_ease-in-out] transition-colors duration-300";

	const setMobileActiveClass = ({ isActive }) =>
		isActive
			? "text-orange-400 text-lg font-light py-2 relative underline-animation active inline-block"
			: "text-white hover:text-orange-400 text-lg font-light py-2 relative underline-animation inline-block transition-colors duration-300";

	const { total } = useCart();
	const { token, logout } = useUser();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-black flex justify-between items-center h-14 px-4">
			<div className="flex items-center gap-4">
				<img src={logo} alt={`logo from ${logo}`} className="w-8 h-auto" />
				<button
					type="button"
					className="text-white text-3xl md:hidden"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? "✖" : "☰"}
				</button>
				{isOpen && (
					<div className="z-50 flex flex-col items-start gap-2 absolute pl-4 pb-4 top-14 left-0 w-full h-auto bg-black md:hidden">
						<NavLink className={setMobileActiveClass} to="/">
							<ButtonsNav name="Home" />
						</NavLink>
						{token ? (
							<NavLink className={setMobileActiveClass} to="/profile">
								<ButtonsNav name="Profile" />
							</NavLink>
						) : (
							<NavLink className={setMobileActiveClass} to="/login">
								<ButtonsNav name="Login" />
							</NavLink>
						)}
						{token ? (
							<button
								type="button"
								onClick={logout}
								className="text-white hover:text-orange-400 text-lg font-light py-2 relative underline-animation inline-block transition-colors duration-300"
							>
								logout
							</button>
						) : (
							<NavLink className={setMobileActiveClass} to="/register">
								<ButtonsNav name="Register" />
							</NavLink>
						)}
					</div>
				)}
				<NavLink className={setActiveClass} to="/">
					<ButtonsNav name="Home" />
				</NavLink>
				{token ? (
					<NavLink className={setActiveClass} to="/profile">
						<ButtonsNav name="Profile" />
					</NavLink>
				) : (
					<NavLink className={setActiveClass} to="/login">
						<ButtonsNav name="Login" />
					</NavLink>
				)}
				{token ? (
					<button
						type="button"
						onClick={logout}
						className="text-white hover:text-orange-400 text-lg font-light px-3 py-1 relative underline-animation hidden md:inline-block transition-colors duration-300"
					>
						logout
					</button>
				) : (
					<NavLink className={setActiveClass} to="/register">
						<ButtonsNav name="Register" />
					</NavLink>
				)}
			</div>
			<div>
				<Link to="/cart">
					<button
						type="button"
						className="text-orange-400 text-lg font-light border-solid border border-orange-400/50 rounded-md px-2 py-1"
					>
						🛒 Total: ${total.toLocaleString()}
					</button>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
