interface Project {
	name: string;
	description: string;
}

const projects: Project[] = [
	{
		name: 'KHDTK Samboja Portal',
		description: 'A biodiversity research portal.',
	},
	{
		name: 'eDatabase System',
		description: 'Documentation system for planning.',
	},
	{
		name: 'University Admission System',
		description: 'Admission management system.',
	},
];

export default function Projects() {
	return (
		<main>
			<h1>My Projects</h1>
			<ul>
				{projects.map((project, index) => (
					<li key={index}>
						<strong>{project.name}</strong>: {project.description}
					</li>
				))}
			</ul>
		</main>
	);
}
