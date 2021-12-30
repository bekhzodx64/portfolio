import { useState, Fragment } from 'react';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { projects as projectsData } from '../data';
import ProjectCard from './../components/ProjectCard';
import { Category } from '../type';
import { motion } from 'framer-motion';
import { stagger, fadeInUp, routeAnimation } from '../animations';

const Projects = () => {
	const [projects, setProjects] = useState(projectsData);
	const [active, setActive] = useState('Все');
	const [showDetail, setShowDetail] = useState<number | null>(null);
	
	const handlerFilterCategory = (category: Category | 'Все') => {
		if (category === 'Все') {
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
		<Fragment>
			<ProjectsNavbar
				handlerFilterCategory={handlerFilterCategory}
				active={active}
			/>
			<motion.div
				className='overflow-y-auto max-h-[60vh]'
				variants={routeAnimation}
				initial='initial'
				animate='animate'
				exit='exit'>
				<motion.div
					className='grid grid-cols-3 gap-5 mt-1 relative'
					variants={stagger}
					initial='initial'
					animate='animate'>
					{projects.map((project) => (
						<motion.div
							className='p-2 bg-gray-200 dark:bg-dark-200 rounded-lg'
							variants={fadeInUp}
							key={project.name}>
							<ProjectCard
								project={project}
								showDetail={showDetail}
								setShowDetail={setShowDetail}
							/>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</Fragment>
	);
};

export default Projects;
