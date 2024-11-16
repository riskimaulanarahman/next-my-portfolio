import './globals.css'; // Impor file CSS global
import { ReactNode } from 'react';

export const metadata = {
	title: 'My Portfolio',
	description: 'Portfolio of Riski Maulana Rahman',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<header>
					<nav>
						<a href="/">Home</a> | <a href="/about">About</a> |{' '}
						<a href="/projects">Projects</a> | <a href="/contact">Contact</a>
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
}
