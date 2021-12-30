import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider attribute='class'>
			<div className='flex flex-col min-h-screen py-5 overflow-x-hidden print:py-0'>
				<div className='container flex flex-col lg:flex-row gap-y-8 md:gap-x-8 my-auto print:gap-y-0'>
					<div className='bg-white dark:bg-dark-100 rounded-2xl py-5 px-7 text-center drop-shadow-2xl ring-8 ring-opacity-50 ring-white dark:ring-dark-200 print:drop-shadow-none print:pt-2 print:pb-0'>
						<Sidebar />
					</div>
					<div className='bg-white dark:bg-dark-100 rounded-2xl pt-6 px-6 drop-shadow-2xl ring-8 ring-opacity-50 ring-white dark:ring-dark-200 overflow-hidden w-full print:ring-0 print:drop-shadow-none'>
						<Navbar />
						<AnimatePresence exitBeforeEnter>
							<Component {...pageProps} key={router.route} />
						</AnimatePresence>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
