import ServiceCard from './../components/ServiceCard';
import { services } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, routeAnimation } from './../animations';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
// import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const About = ({ endpoint }) => {
	return (
		<motion.div
			className='flex flex-col h-full'
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'>
			<h5 className='font-medium text-justify mb-5'>
				Всем привет ! Меня зовут Бекзод и я занимаюсь веб разработкой. На этом
				сайте вы можете узнать инфу обо мне, посмотреть какие проекты были
				сделаны мною а так же на что я способен в сфере веб разработки. К
				сожалению в раздел Проекты попали не все мои работы, а лишь те которые я
				посчитал достойными для показа. Есть вопросы ? Свяжитесь прямо сейчас.
			</h5>
			<div className='bg-slate-200 dark:bg-dark-200 -mx-6 p-6 flex-1'>
				<h6 className='text-xl font-bold tracking-wide mb-10'>
					Что я предлагаю
				</h6>
				<motion.div
					className='grid lg:grid-cols-2 lg:gap-x-4 gap-y-6 lg:gap-y-10 space-y-4 lg:space-y-0'
					variants={stagger}
					initial='initial'
					animate='animate'>
					{services.map((service) => (
						<motion.div
							variants={fadeInUp}
							className='bg-white dark:bg-dark-100 rounded-xl drop-shadow'
							key={service.title}>
							<ServiceCard service={service} />
						</motion.div>
					))}
					<div className='border-4 border-white border-dashed border-opacity-80 dark:border-dark-100 ring-opacity-60 rounded-xl flex items-center justify-center print:hidden'>
						<AiOutlineAppstoreAdd className='w-9 h-9 text-slate-400 dark:text-dark-100 opacity-70 dark:opacity-100'/>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

// export const getServerSideProps: GetServerSideProps = async (
// 	context: GetServerSidePropsContext
// ) => {
// 	const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
// 	const data = await res.json();
// 	return { props: { endpoint: process.env.VERCEL_URL } };
// };

export default About;
