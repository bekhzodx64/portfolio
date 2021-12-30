import { FunctionComponent, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
import { IProject } from './../type';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../animations';

const ProjectCard: FunctionComponent<{
	project: IProject;
	showDetail: null | number,
	setShowDetail: (id: null | number) => void;
}> = ({
	project: {
		id,
		name,
		image_path,
		category,
		deployed_url,
		description,
		github_url,
		key_techs,
	},
	showDetail,
	setShowDetail,
}) => {
	

	return (
		<div>
			<Image
				src={image_path}
				alt={name}
				className='cursor-pointer rounded-md select-none'
				onClick={() => setShowDetail(id)}
				width='300'
				height='170'
				layout='responsive'
			/>
			<p className='my-2 text-center'>{name}</p>

			{showDetail === id && (
				<div className='grid rounded-lg md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black bg-white bg-opacity-80 drop-shadow backdrop-blur-xl dark:text-white dark:bg-dark-100 p-2 md:p-10'>
					<motion.div variants={stagger} initial='initial' animate='animate'>
						<motion.div variants={fadeInUp}>
							<Image
								src={image_path}
								alt={name}
								className='rounded-lg select-none pointer-events-none'
								width='250'
								height='150'
								layout='responsive'
							/>
						</motion.div>
						<motion.div
							className='flex justify-center my-4 space-x-3'
							variants={fadeInUp}>
							<a
								href={github_url}
								target='_blank'
								className='flex items-center px-4 py-2 space-x-3 text-lg bg-slate-100 dark:bg-dark-200 select-none rounded-lg drop-shadow'>
								<AiFillGithub /> <span>Github</span>
							</a>
							<a
								href={deployed_url}
								target='_blank'
								className='flex items-center px-4 py-2 space-x-3 text-lg bg-slate-100 dark:bg-dark-200 select-none rounded-lg drop-shadow'>
								<CgWebsite /> <span>Демо</span>
							</a>
						</motion.div>
					</motion.div>

					<motion.div variants={stagger} initial='initial' animate='animate'>
						<motion.h2
							variants={fadeInUp}
							className='mb-3 text-xl font-medium md:text-2xl'>
							{name}
						</motion.h2>
						<motion.h3 variants={fadeInUp} className='mb-3 font-medium'>
							{description}
						</motion.h3>
						<motion.div
							variants={fadeInUp}
							className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
							{key_techs.map((tech) => (
								<span
									key={tech}
									className='px-3 py-1 my-1 bg-white dark:bg-dark-200 rounded-md drop-shadow select-none'>
									{tech}
								</span>
							))}
						</motion.div>
					</motion.div>

					<button
						onClick={() => setShowDetail(null)}
						className='absolute top-3 right-3 rounded-full outline-none bg-gray-200 dark:bg-dark-200'>
						<MdClose size={30} />
					</button>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
