import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center md:text-left py-20 flex flex-col md:flex-row items-center justify-between">
				{/* Teks */}
				<div className="text-center md:text-left ml-20">
					<h1 className="text-5xl font-bold text-white">
						Hi, I&apos;m Riski Maulana Rahman!
					</h1>
					<p className="text-xl mt-4">A passionate Full-Stack Developer</p>
					<Link href="#about">
						<button className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
							Learn More About Me
						</button>
					</Link>
				</div>

				{/* Gambar */}
				<div className="mt-6 md:mt-0">
					<Image
						src={'/header.png'}
						width={600}
						height={600} // Pastikan menambahkan properti height
						alt="Riski Maulana Rahman"
					/>
				</div>
			</section>

			{/* About Me Section */}
			<section id="about" className="py-20 bg-white text-center">
				<h2 className="text-3xl font-bold">About Me</h2>
				<p className="mt-4 max-w-3xl mx-auto text-gray-600">
					I&apos;m a full-stack developer with experience in building web
					applications using modern technologies like React, Next.js, Laravel,
					and Node.js. I&apos;m passionate about clean code, performance, and
					learning new technologies.
				</p>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-20 bg-gray-100 text-center">
				<h2 className="text-3xl font-bold">My Skills</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Frontend</h3>
						<ul className="mt-4 text-gray-600">
							<li>React.js</li>
							<li>Next.js</li>
							<li>Tailwind CSS</li>
						</ul>
					</div>
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Backend</h3>
						<ul className="mt-4 text-gray-600">
							<li>Node.js</li>
							<li>Laravel</li>
							<li>Express</li>
						</ul>
					</div>
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Tools</h3>
						<ul className="mt-4 text-gray-600">
							<li>Git</li>
							<li>Docker</li>
							<li>Vercel / Netlify</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20 bg-white text-center">
				<h2 className="text-3xl font-bold">My Projects</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					<div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">KHDTK Samboja Portal</h3>
						<p className="mt-4 text-gray-600">
							A portal for managing the Samboja Forest area, providing access to
							biodiversity and research data.
						</p>
					</div>
					<div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">
							eDatabase Documentation System
						</h3>
						<p className="mt-4 text-gray-600">
							A system for managing the documentation of development planning
							results.
						</p>
					</div>
					<div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">
							University Admission System
						</h3>
						<p className="mt-4 text-gray-600">
							An automated system for handling university admissions and student
							data.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20 bg-teal-500 text-white text-center"
			>
				<h2 className="text-3xl font-bold">Contact Me</h2>
				<p className="mt-4 max-w-2xl mx-auto text-gray-200">
					Feel free to reach out to me via email or LinkedIn for collaboration
					or inquiries.
				</p>
				<div className="mt-6">
					<p>
						Email:{' '}
						<a href="mailto:riski@example.com" className="underline">
							riski@example.com
						</a>
					</p>
					<p className="mt-2">
						LinkedIn:{' '}
						<a
							href="https://www.linkedin.com/in/yourprofile"
							className="underline"
						>
							yourprofile
						</a>
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-6 bg-gray-800 text-center text-white">
				<p>
					&copy; {new Date().getFullYear()} Riski Maulana Rahman. All rights
					reserved.
				</p>
			</footer>
		</div>
	);
}
