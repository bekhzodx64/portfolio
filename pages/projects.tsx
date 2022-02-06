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
		const newArray = projectsData.filter((project) => project.category.includes(category));
		setProjects(newArray);
		setActive(category);
	};

	return (
		<Fragment>
			<ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />
			<motion.div
				className='mb-6 h-96 overflow-y-auto pr-5 md:h-[360px] lg:mb-0 lg:h-[445px]'
				variants={routeAnimation}
				initial='initial'
				animate='animate'
				exit='exit'>
				<motion.div className='relative mt-1 grid gap-5 sm:grid-cols-2 md:grid-cols-3' variants={stagger} initial='initial' animate='animate'>
					{projects.map((project) => (
						<motion.div className='dark:bg-dark-200 rounded-lg bg-gray-200 p-2' variants={fadeInUp} key={project.name}>
							<ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</Fragment>
	);
};

export default Projects;
