import { FunctionComponent } from 'react';
import { ISkill } from '../type';
import { motion } from 'framer-motion';

const Bar: FunctionComponent<{
	data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
	const bar_width = `${level}`;

	const variants = {
		initial: {
			width: 0,
		},
		animate: {
			width: bar_width,
			transition: {
				duration: 1,
				type: 'spring',
				damping: 10,
				stiffness: 100,
			},
		},
	};

	return (
		<div className='dark:bg-dark-200 rounded-full bg-slate-300 text-white print:bg-white'>
			<motion.div
				className='from-green print:text-dark-200 flex items-center rounded-full bg-gradient-to-r to-blue-600 px-2 py-1'
				style={{ width: bar_width }}
				variants={variants}
				initial='initial'
				animate='animate'>
				<Icon className='mr-2 print:hidden' />
				{name}
			</motion.div>
		</div>
	);
};

export default Bar;
