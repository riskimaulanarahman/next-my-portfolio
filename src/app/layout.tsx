import './globals.css'; // Impor file CSS global
import Navbar from './components/navbar';
import { ReactNode } from 'react';

export const metadata = {
	title: 'My Portfolio',
	description: 'Portfolio of Riski Maulana Rahman',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
