// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white shadow-md fixed w-full z-10 top-0">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				{/* Logo */}
				<div className="text-2xl font-bold text-blue-500">
					<Link href="#home">PINDAY</Link>
				</div>

				{/* Hamburger Menu */}
				<button
					className="block md:hidden text-gray-700 focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						></path>
					</svg>
				</button>

				{/* Menu Items */}
				<ul
					className={`${
						isOpen ? 'block' : 'hidden'
					} md:flex space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
				>
					<li>
						<Link
							href="#about"
							className="text-gray-700 hover:text-blue-500 transition"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href="#projects"
							className="text-gray-700 hover:text-blue-500 transition"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							href="#contact"
							className="text-gray-700 hover:text-blue-500 transition"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
