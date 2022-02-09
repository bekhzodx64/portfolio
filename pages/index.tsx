import ServiceCard from './../components/ServiceCard';
import { services } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, routeAnimation } from './../animations';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';

const About = ({ endpoint }) => {
	return (
		<motion.div
			className='flex h-full flex-col'
			variants={routeAnimation}
			initial='initial'
			animate='animate'
			exit='exit'>
			<Head>
				<title>Веб разработчик | Главная</title>
			</Head>
			<h2 className='mb-5 text-justify font-medium'>
				Всем привет ! Меня зовут Бекзод и я занимаюсь веб разработкой. На этом сайте вы
				сможете узнать инфу обо мне, посмотреть какие проекты были сделаны мною а так же
				на что я способен в сфере веб разработки. К сожалению в раздел Проекты попали не
				все мои работы, а лишь те которые я посчитал достойными для показа. Есть вопросы ?
				Свяжитесь прямо сейчас.
			</h2>
			<div className='dark:bg-dark-200 -mx-6 flex-1 bg-slate-200 p-6'>
				<h2 className='mb-10 text-xl font-bold tracking-wide'>Что я предлагаю</h2>
				<motion.div
					className='grid gap-y-6 space-y-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10 lg:space-y-0'
					variants={stagger}
					initial='initial'
					animate='animate'>
					{services.map((service) => (
						<motion.div
							variants={fadeInUp}
							className='dark:bg-dark-100 rounded-xl bg-white shadow'
							key={service.title}>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
};

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	// const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
	// const data = await res.json();
	return { props: { endpoint: process.env.VERCEL_URL } };
};

export default About;
