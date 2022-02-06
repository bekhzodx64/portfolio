import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider attribute='class'>
			<div className='flex min-h-screen flex-col overflow-x-hidden py-5 print:py-0'>
				<div className='container my-auto flex flex-col gap-y-8 print:gap-y-0 md:gap-x-8 lg:flex-row'>
					<div className='dark:bg-dark-100 dark:ring-dark-200 rounded-2xl bg-white py-5 px-7 text-center ring-8 ring-white ring-opacity-50 drop-shadow-2xl print:pt-2 print:pb-0 print:drop-shadow-none'>
						<Sidebar />
					</div>
					<div className='dark:bg-dark-100 dark:ring-dark-200 w-full overflow-hidden rounded-2xl bg-white px-6 pt-6 ring-8 ring-white ring-opacity-50 drop-shadow-2xl print:ring-0 print:drop-shadow-none'>
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
