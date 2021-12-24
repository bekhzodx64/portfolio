import ProjectsNavbar from '../components/ProjectsNavbar';
import { projects as projectsData } from '../data';
import ProjectCard from './../components/ProjectCard';
import { useState } from 'react';
import { Category } from '../type';
import { motion } from 'framer-motion';
import { stagger, fadeInUp, routeAnimation } from '../animations';

const Projects = () => {
	const [projects, setProjects] = useState(projectsData);
	const [active, setActive] = useState('all');

	const [showDetail, setShowDetail] = useState<number|null>(null);

	const handlerFilterCategory = (category: Category | 'all') => {
		if (category === 'all') {
			setProjects(projectsData);
			setActive(category);
			return;
		}

		const newArray = projectsData.filter((project) =>
			project.category.includes(category)
		);
		setProjects(newArray);
		setActive(category);
	};

	return (
		<motion.div
			className='px-5 py-2 h-[65vh] overflow-y-scroll'
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'>
			<ProjectsNavbar
				handlerFilterCategory={handlerFilterCategory}
				active={active}
			/>

			<motion.div
				className='grid grid-cols-12 gap-4 my-3 relative'
				variants={stagger}
				initial='initial'
				animate='animate'>
				{projects.map((project) => (
					<motion.div
						className='col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg'
						variants={fadeInUp}
						key={project.name}>
						<ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Projects;
