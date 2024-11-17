'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import {
	FaReact,
	FaVuejs,
	FaAngular,
	FaGithub,
	FaDocker,
	FaJenkins,
} from 'react-icons/fa';
import {
	SiNextdotjs,
	SiNuxtdotjs,
	SiLaravel,
	SiExpress,
	SiNestjs,
	SiDjango,
	SiVisualstudio,
	SiSublimetext,
	SiNpm,
	SiYarn,
	SiComposer,
	SiDbeaver,
	SiPostman,
	SiJira,
	SiTrello,
	SiGooglecloud,
	SiZoom,
	SiMicrosoftteams,
	SiDiscord,
	SiFigma,
	SiAdobexd,
	SiSketch,
	SiGooglemeet,
	SiMysql,
	SiPython,
	SiGo,
	SiMicrosoftsqlserver,
} from 'react-icons/si';

interface Project {
	title: string;
	image: string;
	shortDescription: string;
	fullDescription: string;
}

export default function Home() {
	const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
		const [isReadMore, setIsReadMore] = useState(false);

		const toggleReadMore = () => {
			setIsReadMore(!isReadMore);
		};

		return (
			<div className="p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-50 object-cover rounded-md"
				/>
				<h3 className="text-xl font-semibold mt-4">{project.title}</h3>
				<p className="mt-4 text-gray-600">
					{isReadMore ? project.fullDescription : project.shortDescription}
				</p>
				<button
					onClick={toggleReadMore}
					className="mt-2 text-blue-500 hover:underline"
				>
					{isReadMore ? 'Read Less' : 'Read More'}
				</button>
			</div>
		);
	};

	const projects = [
		{
			title: 'e-Database',
			image:
				'https://camo.githubusercontent.com/f02aa54f2cca43a2365b08f6eddea495db4bc642d15509df7fe5cac2d178a5a3/68747470733a2f2f70696e6461792e746f702f696d6167652f6564617461626173652e6a7067',
			shortDescription:
				'The eDatabase application system is designed to support the documentation of development planning results, including numerical and spatial data...',
			fullDescription:
				'The eDatabase application system is designed to support the documentation of development planning results, including numerical and spatial data. Its goal is to provide accurate, up-to-date, and accountable regional development data to improve planning, control, and evaluation processes. The application focuses on creating measurable and environmentally friendly development plans. It consists of three main components: Building Data, Household Data, and Member Data (Occupants). This system aims to contribute to the continued development of Balikpapan city.',
		},
		{
			title: 'Penerimaan Mahasiswa Baru (PMB) : Universitas Indonesia',
			image:
				'https://camo.githubusercontent.com/8acf9205de35abdfc0d12c839a89e2eacb617fcc4972fe25b4889c3246518402/68747470733a2f2f70696e6461792e746f702f696d6167652f706d6275692e6a7067',
			shortDescription:
				'The New Student Admission at the University of Indonesia (UI) involves the process of registration and submission of documents by prospective students...',
			fullDescription:
				'The New Student Admission at the University of Indonesia (UI) involves the process of registration and submission of documents by prospective students. Prospective students are required to register through the university`s online registration system. After registration is completed, prospective students are required to submit the required documents, such as diplomas, transcripts, and other documents as specified by UI. The entire registration and document submission process is aimed at ensuring that prospective students meet the requirements set by the university to participate in further selection processes.',
		},
		{
			title: 'IKKAM Polresta Balikpapan',
			image:
				'https://camo.githubusercontent.com/b4b090862e39cde9594ff9f45ddc0edce6a520c27a906bdcb254a3648a65dd7e/68747470733a2f2f70696e6461792e746f702f696d6167652f696b6b616d2e6a7067',
			shortDescription:
				'IKKAM POLRESTA BALIKPAPAN, an abbreviation of Internal Command and Schedule, is a scheduling application designed to meet the special needs of POLRESTA BALIKPAPAN...',
			fullDescription:
				'IKKAM POLRESTA BALIKPAPAN, an abbreviation of Internal Command and Schedule, is a scheduling application designed to meet the special needs of POLRESTA BALIKPAPAN. With a primary focus on optimizing internal processes, the app aims to improve coordination, communication and overall efficiency within the police department.',
		},
		{
			title: 'ASTRA Motor Kalimantan Timur',
			image:
				'https://camo.githubusercontent.com/b42172f1f6629b41655cd864143a7a6d5c4a393acd53b4010f0d3d075e3f90f6/68747470733a2f2f70696e6461792e746f702f696d6167652f61737472616d6f746f726b616c74696d2e6a7067',
			shortDescription:
				'The Monitoring and Management System for ASTRA MOTOR Branch Dealers in East Kalimantan is a platform designed to monitor and manage the work and reports from branch dealers scattered across East Kalimantan...',
			fullDescription:
				'The Monitoring and Management System for ASTRA MOTOR Branch Dealers in East Kalimantan is a platform designed to monitor and manage the work and reports from branch dealers scattered across East Kalimantan. This system also facilitates the approval process related to event organization by branch dealers. Additionally, the system provides information about the sales volume from each branch dealer in East Kalimantan. Therefore, this system functions as an efficient and centralized management tool to ensure optimal performance and coordination between branch dealers and the ASTRA MOTOR headquarters.',
		},
		{
			title: 'SINAR LAUT KSOP KELAS 1 Balikpapan',
			image:
				'https://camo.githubusercontent.com/2e437fd325bc906296f0c7af317f3b4bfba87a42e85e12c1d57a1c3d3ac565da/68747470733a2f2f70696e6461792e746f702f696d6167652f73696e61726c6175746b736f702e6a7067',
			shortDescription:
				'SINAR LAUT KSOP Class 1 Balikpapan is a portal that provides access to various systems related to maritime activities in the Balikpapan region...',
			fullDescription:
				'SINAR LAUT KSOP Class 1 Balikpapan is a portal that provides access to various systems related to maritime activities in the Balikpapan region. This system aims to facilitate various processes and procedures related to the safety and security of shipping operations in the area. Through this portal, users can access information about Standard Operating Procedures (SOPs) and other relevant systems related to maritime activities, making it easier for stakeholders to carry out their activities more efficiently and organized.',
		},
		// Tambahkan data project lain
	];

	const [visibleProjects, setVisibleProjects] = useState(3);
	const showMoreProjects = () => {
		setVisibleProjects((prev) => (prev === 3 ? projects.length : 3));
	};

	return (
		<div>
			{/* Hero Section */}
			<section
				id="home"
				className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center md:text-left py-20 flex flex-col md:flex-row items-center justify-between"
			>
				{/* Teks */}
				<div className="text-center md:text-left ml-20">
					<h1 className="text-5xl font-bold text-white hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						Hi, I&apos;m Riski Maulana Rahman!
					</h1>
					<p className="text-xl mt-4">A passionate Full-Stack Developer</p>
					<Link href="https://github.com/riskimaulanarahman" target="blank">
						<button className="mt-6 flex items-center bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								className="w-5 h-5 mr-2"
							>
								<path d="M12 .5C5.74.5.5 5.74.5 12c0 5.08 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.1-3.19.7-3.86-1.39-3.86-1.39-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.14.08 1.74 1.17 1.74 1.17 1.02 1.75 2.67 1.25 3.32.95.1-.74.4-1.25.72-1.54-2.54-.29-5.2-1.27-5.2-5.66 0-1.25.45-2.28 1.17-3.08-.12-.29-.51-1.45.11-3.01 0 0 .96-.31 3.14 1.18A10.86 10.86 0 0 1 12 5.8c.98.01 1.97.13 2.89.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.56.23 2.72.11 3.01.72.8 1.17 1.83 1.17 3.08 0 4.4-2.67 5.37-5.22 5.65.41.36.77 1.08.77 2.18 0 1.58-.01 2.85-.01 3.24 0 .3.2.66.79.54A10.96 10.96 0 0 0 23.5 12C23.5 5.74 18.26.5 12 .5z" />
							</svg>
							My GitHub
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
						className="animate-float"
					/>
				</div>
			</section>

			{/* About Me Section */}
			<section
				id="about"
				className="py-20 bg-white text-center hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
			>
				<h2 className="text-3xl font-bold">About Me</h2>
				<p className="mt-4 max-w-3xl mx-auto text-gray-600">
					I am a System Development Officer with a degree in Information
					Technology.{' '}
					<strong>
						I specialize in developing automated systems to improve operational
						efficiency
					</strong>
					. My experience includes{' '}
					<strong>
						automating report generation processes and enhancing online
						submissions
					</strong>
					. I enjoy collaborating with teams to address operational challenges
					through technology. My goal is to leverage my system development
					skills to contribute to the growth and success of the company.
				</p>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-20 bg-gray-100 text-center">
				<h2 className="text-3xl font-bold">My Skills</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{/* Frontend */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Frontend</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<FaReact className="mr-2 text-blue-500" /> React.js
							</li>
							<li className="flex items-center">
								<FaVuejs className="mr-2 text-green-500" /> Vue.js
							</li>
							<li className="flex items-center">
								<SiNextdotjs className="mr-2 text-black" /> Next.js
							</li>
							<li className="flex items-center">
								<SiNuxtdotjs className="mr-2 text-green-700" /> Nuxt.js
							</li>
							<li className="flex items-center">
								<FaAngular className="mr-2 text-red-600" /> Angular
							</li>
						</ul>
					</div>

					{/* Backend */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Backend</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<SiLaravel className="mr-2 text-red-500" /> Laravel
							</li>
							<li className="flex items-center">
								<SiExpress className="mr-2 text-gray-500" /> Express.js
							</li>
							<li className="flex items-center">
								<SiNestjs className="mr-2 text-red-600" /> NestJS
							</li>
							<li className="flex items-center">
								<SiGo className="mr-2 text-blue-400" /> Go
							</li>
							<li className="flex items-center">
								<SiDjango className="mr-2 text-green-700" /> Django
							</li>
						</ul>
					</div>

					{/* Version Control System */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Version Control System</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<FaGithub className="mr-2 text-black" /> Git
							</li>
						</ul>
					</div>

					{/* Containerization and Virtualization */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">
							Containerization and Virtualization
						</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<FaDocker className="mr-2 text-blue-500" /> Docker
							</li>
						</ul>
					</div>

					{/* API Development and Testing */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">
							API Development and Testing
						</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<SiPostman className="mr-2 text-orange-500" /> Postman
							</li>
						</ul>
					</div>

					{/* CI/CD Tools */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">
							CI/CD & Data Integrations Tools
						</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<FaJenkins className="mr-2 text-orange-500" /> Jenkins
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-orange-500" /> Pentaho
							</li>
						</ul>
					</div>

					{/* Package Managers */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Package Managers</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<SiNpm className="mr-2 text-green-500" /> npm (Node.js)
							</li>
							<li className="flex items-center">
								<SiYarn className="mr-2 text-blue-500" /> Yarn
							</li>
							<li className="flex items-center">
								<SiComposer className="mr-2 text-black" /> Composer (PHP)
							</li>
							<li className="flex items-center">
								<SiPython className="mr-2 text-blue-400" /> pip (Python)
							</li>
							<li className="flex items-center">
								<SiGo className="mr-2 text-blue-500" /> Go Modules (Golang)
							</li>
						</ul>
					</div>

					{/* Bug Tracking and Project Management */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">
							Bug Tracking and Project Management
						</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<SiJira className="mr-2 text-blue-600" /> JIRA
							</li>
							<li className="flex items-center">
								<SiTrello className="mr-2 text-blue-500" /> Trello
							</li>
							<li className="flex items-center">
								<SiJira className="mr-2 text-orange-500" /> Freedcamp
							</li>
						</ul>
					</div>

					{/* Database Management Tools */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Database Management Tools</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<SiMysql className="mr-2 text-blue-500" /> Navicat
							</li>
							<li className="flex items-center">
								<SiMysql className="mr-2 text-blue-400" /> HeidiSQL
							</li>
							<li className="flex items-center">
								<SiDbeaver className="mr-2 text-blue-600" /> DBeaver
							</li>
							<li className="flex items-center">
								<SiMicrosoftsqlserver className="mr-2 text-blue-400" /> SQL
								Server Management Studio
							</li>
						</ul>
					</div>

					{/* Cloud Services */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Cloud Services</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<SiGooglecloud className="mr-2 text-blue-500" /> Google Cloud
								Platform (GCP)
							</li>
						</ul>
					</div>

					{/* Communication Tools */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Communication Tools</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<SiZoom className="mr-2 text-blue-500" /> Zoom
							</li>
							<li className="flex items-center">
								<SiGooglemeet className="mr-2 text-green-500" /> Meet
							</li>
							<li className="flex items-center">
								<SiMicrosoftteams className="mr-2 text-blue-600" /> Microsoft
								Teams
							</li>
							<li className="flex items-center">
								<SiDiscord className="mr-2 text-indigo-600" /> Discord
							</li>
						</ul>
					</div>

					{/* Code Editor/IDE */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Code Editor/IDE</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<SiVisualstudio className="mr-2 text-blue-500" /> Visual Studio
								Code (VS Code)
							</li>
							<li className="flex items-center">
								<SiSublimetext className="mr-2 text-purple-600" /> Sublime Text
							</li>
						</ul>
					</div>

					{/* Design and Prototyping */}
					<div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
						<h3 className="text-xl font-semibold">Design and Prototyping</h3>
						<ul className="mt-4 text-gray-600 space-y-2">
							<li className="flex items-center">
								<SiFigma className="mr-2 text-blue-500" /> Figma
							</li>
							<li className="flex items-center">
								<SiAdobexd className="mr-2 text-purple-600" /> Adobe XD
							</li>
							<li className="flex items-center">
								<SiSketch className="mr-2 text-orange-500" /> Sketch
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20 bg-white text-center">
				<h2 className="text-3xl font-bold">My Projects</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{projects.slice(0, visibleProjects).map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
				{projects.length > 3 && (
					<button
						onClick={showMoreProjects}
						className="mt-6 bg-teal-700 rounded-full px-6 py-3 text-white hover:underline"
					>
						{visibleProjects === 3 ? 'Show More' : 'Show Less'}
					</button>
				)}
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
							riskimaulanarahman.id@gmail.com
						</a>
					</p>
					<p className="mt-2">
						LinkedIn:{' '}
						<a
							href="https://www.linkedin.com/in/riskimaulanarahman"
							className="underline"
						>
							Riski Maulana Rahman
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
