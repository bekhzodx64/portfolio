import { services } from '../data';
import ServiceCard from './../components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, routeAnimation } from './../animations';
// import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const About = ({ endpoint }) => {
	return (
		<motion.div
			className='flex flex-col px-6 pt-1 flex-grow'
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'>
			<h5 className='my-3 font-medium text-justify'>
				Всем привет ! Меня зовут Бекзод и я занимаюсь веб разработкой. На этом
				сайте вы можете узнать инфу обо мне, посмотреть какие проекты были
				сделаны мною а так же на что я способен в сфере веб разработки. К
				сожалению в раздел Проекты попали не все мои работы, а лишь те которые я
				посчитал достойными для показа. Есть вопросы ? Свяжитесь прямо сейчас.
			</h5>
			<div className='p-4 mt-5 bg-slate-200 dark:bg-dark-200 -mx-6 flex-grow'>
				<h6 className='my-3 text-xl font-bold tracking-wide'>
					Что я предлагаю
				</h6>
				<motion.div
					className='grid lg:grid-cols-2 gap-6 my-3'
					variants={stagger}
					initial='initial'
					animate='animate'>
					{services.map((service) => (
						<motion.div
							variants={fadeInUp}
							className='lg:col-span-1 bg-white dark:bg-dark-100 rounded-lg drop-shadow'
							key={service.title}>
							<ServiceCard service={service} />
						</motion.div>
					))}
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
