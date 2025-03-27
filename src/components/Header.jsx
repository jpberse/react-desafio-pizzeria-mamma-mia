import React from "react";
import { FaInstagram, FaTiktok, FaTripadvisor } from "react-icons/fa";
import { SiUbereats } from "react-icons/si";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<header className="relative w-full h-[400px] md:h-[500px] flex flex-col items-center justify-center text-white text-center bg-black">
			<div className="absolute inset-0 bg-[url('/src/assets/Header.jpg')] bg-cover bg-center opacity-50" />
			<div className="relative z-10 max-w-3xl xl:max-w-6xl px-4 flex flex-col items-center text-center">
				<div className="flex flex-col md:flex-row items-center gap-4">
					<img src={logo} alt="Logo" className="w-24 h-auto" />
					<h1 className="text-4xl md:text-6xl xl:text-8xl font-bold uppercase tracking-wide">
						Nomi Pizza
					</h1>
				</div>
				<p className="text-sm md:text-base xl:text-4xl mt-2">
					Our Pizza is a family-owned restaurant that has been proudly serving
					since the 1940s, located on Broadway and West 112th Street in New
					York.
				</p>
				<div className="flex justify-center gap-4 mt-4 text-xl xl:text-3xl">
					<SiUbereats className="hover:text-gray-300 cursor-pointer" />
					<FaInstagram className="hover:text-gray-300 cursor-pointer" />
					<FaTiktok className="hover:text-gray-300 cursor-pointer" />
					<FaTripadvisor className="hover:text-gray-300 cursor-pointer" />
				</div>
			</div>
		</header>
	);
};

export default Header;
