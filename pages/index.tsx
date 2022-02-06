import ServiceCard from './../components/ServiceCard';
import { services } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, routeAnimation } from './../animations';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
// import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const About = ({ endpoint }) => {
	return (
		<motion.div className='flex h-full flex-col' variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
			<h5 className='mb-5 text-justify font-medium'>
				Всем привет ! Меня зовут Бекзод и я занимаюсь веб разработкой. На этом сайте вы можете узнать инфу обо мне, посмотреть какие проекты были
				сделаны мною а так же на что я способен в сфере веб разработки. К сожалению в раздел Проекты попали не все мои работы, а лишь те которые я
				посчитал достойными для показа. Есть вопросы ? Свяжитесь прямо сейчас.
			</h5>
			<div className='dark:bg-dark-200 -mx-6 flex-1 bg-slate-200 p-6'>
				<h6 className='mb-10 text-xl font-bold tracking-wide'>Что я предлагаю</h6>
				<motion.div
					className='grid gap-y-6 space-y-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10 lg:space-y-0'
					variants={stagger}
					initial='initial'
					animate='animate'>
					{services.map((service) => (
						<motion.div variants={fadeInUp} className='dark:bg-dark-100 rounded-xl bg-white drop-shadow' key={service.title}>
							<ServiceCard service={service} />
						</motion.div>
					))}
					<div className='dark:border-dark-100 flex h-24 items-center justify-center rounded-xl border-4 border-dashed border-white border-opacity-80 ring-opacity-60 print:hidden md:h-[88px]'>
						<AiOutlineAppstoreAdd className='dark:text-dark-100 h-9 w-9 text-slate-400 opacity-70 dark:opacity-100' />
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
