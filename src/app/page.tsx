import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<h1>Hi, I&apos;m Riski Maulana Rahman!</h1>
			<Image src="/profile.jpeg" alt="Riski's Photo" width={200} height={200} />
			<p>A passionate Full-Stack Developer.</p>
			<div>
				<a href="/about">About Me</a>
				<a href="/projects">Projects</a>
				<a href="/contact">Contact</a>
			</div>
		</main>
	);
}
