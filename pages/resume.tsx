import { languages, tools } from '../data';
import Bar from './../components/Bar';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';

const resume = () => {
	return (
		<motion.div
			className='px-6 py-2'
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'>
			{/* education exp */}
			<div className='grid md:grid-cols-2 gap-6'>
				<motion.div variants={fadeInUp} initial='initial' animate='animate'>
					<h5 className='my-3 text-2xl font-bold'>Education</h5>
					<div>
						<h5 className='my-2 text-xl font-bold'>
							Information and Communication Technology
						</h5>
						<p className='font-semibold'>TPKIT</p>
						<p className='my-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
							assumenda?
						</p>
					</div>
				</motion.div>
				<motion.div variants={fadeInUp} initial='initial' animate='animate'>
					<h5 className='my-3 text-2xl font-bold'>Experience</h5>
					<div>
						<h5 className='my-2 text-xl font-bold'>
							Content Manager (5 months) - Front-end developer (9 months)
						</h5>
						<p className='font-semibold'>220volt.uz</p>
						<p className='my-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
							assumenda?
						</p>
					</div>
				</motion.div>
			</div>

			{/* language tools */}
			<div className='grid md:grid-cols-2 gap-6'>
				<div>
					<h5 className='my-3 text-2xl font-bold'>Languages & Framworks</h5>
					<div className='my-2'>
						{languages.map((language) => (
							<Bar data={language} key={language.name} />
						))}
					</div>
				</div>
				<div>
					<h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
					<div className='my-2'>
						{tools.map((tool) => (
							<Bar data={tool} key={tool.name} />
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default resume;
