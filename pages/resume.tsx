import { languages, tools } from '../data';
import Bar from './../components/Bar';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';
import { AiOutlineLink } from 'react-icons/ai';
import { FaUniversity } from 'react-icons/fa';
import Head from 'next/head';

const resume = () => {
	return (
		<motion.div variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
			<Head>
				<title>Веб разработчик | Резюме</title>
			</Head>
			<div className='grid gap-6 lg:grid-cols-2'>
				<motion.div variants={fadeInUp} initial='initial' animate='animate'>
					<h5 className='my-3 text-2xl font-bold'>Образование</h5>
					<div>
						<h5 className='my-2 flex items-center space-x-1 text-xl font-bold'>
							<FaUniversity />
							<span>ТУИТ</span>
						</h5>
						<p className='font-semibold'>Разработка практических программных средств</p>
						<p className='my-3'>
							Учусь в магистратуре в Ташкентском Университете Информационных Технологий
							Имени Мухаммад Ал-Хоразмий.
						</p>
					</div>
				</motion.div>
				<motion.div variants={fadeInUp} initial='initial' animate='animate'>
					<h5 className='my-3 text-2xl font-bold'>Опыт работы</h5>
					<div>
						<h5 className='my-2 text-xl font-bold'>
							<a
								href='https://220volt.uz/'
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center space-x-1'>
								<AiOutlineLink />
								<span>220volt.uz</span>
							</a>
						</h5>
						<p className='font-semibold'>Веб разработчик</p>
						<p className='my-3'>
							Устроился на работу Контент менеджером, поработал в этой должности 5 месяцев
							а потом на должности Веб разрботчика 9 месяцев. Но в конце пришлось
							уволиться из за нехватки времени на учебу.
						</p>
					</div>
				</motion.div>
			</div>

			<div className='grid gap-6 pb-6 md:grid-cols-2'>
				<div>
					<h5 className='mb-3 text-[22px] font-bold xl:text-2xl'>Языки & Фреймворки</h5>
					<div className='pointer-events-none select-none space-y-2 print:flex print:items-center print:space-y-0'>
						{languages.map((language) => (
							<Bar data={language} key={language.name} />
						))}
					</div>
				</div>
				<div>
					<h5 className='mb-3 text-[22px] font-bold xl:text-2xl'>
						Программы & Инструменты
					</h5>
					<div className='pointer-events-none select-none space-y-2 print:flex print:items-center print:space-y-0'>
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
