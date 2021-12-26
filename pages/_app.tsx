import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider attribute='class'>
			<div className='grid grid-cols-12 gap-7 my-14 lg:px-48 px-5 sm:px-20 md:px-32'>
				<div className='lg:col-span-3 bg-white dark:bg-dark-100 rounded-2xl col-span-12 p-3 bg-opacity-90 backdrop-blur-lg drop-shadow-2xl text-center ring-8 ring-opacity-50 ring-white dark:ring-dark-300 dark:shadow-custom-dark'>
					<Sidebar />
				</div>
				<div className='lg:col-span-9 overflow-hidden bg-white dark:bg-dark-100 rounded-2xl col-span-12 flex flex-col bg-opacity-90 backdrop-blur-lg drop-shadow-2xl dark:shadow-custom-dark ring-8 ring-opacity-50 ring-white dark:ring-dark-300 p-4'>
					<Navbar />
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
