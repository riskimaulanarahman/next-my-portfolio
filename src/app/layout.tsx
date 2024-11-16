import './globals.css'; // Impor file CSS global
import { ReactNode } from 'react';
import Link from 'next/link';

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
						<Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
						<Link href="/projects">Projects</Link> |{' '}
						<Link href="/contact">Contact</Link>
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
}
