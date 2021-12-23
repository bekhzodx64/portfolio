import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

import { useTheme } from 'next-themes';

const Sidebar = () => {
	const { theme, setTheme } = useTheme();

	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<div>
			<Image
				src='/avatar.jpg'
				alt='User avatar'
				className='w-32 h-32 rounded-full mx-auto select-none pointer-events-none'
				width={200}
				height={200}
			/>
			<h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
				<span>#BekhzoD</span>
				<span>_x64</span>
			</h3>
			<p className='px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full'>
				Web Developer
			</p>
			<a
				href=''
				className='px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full flex items-center justify-center'
				download='name'>
				<GiTie className='w-6 h-6' />
				Download Resume
			</a>
			{/* social icons */}
			<div className='flex justify-around my-5 text-green w-9/12 md:w-full mx-auto'>
				<a href=''>
					<AiFillYoutube className='w-8 h-8 cursor-pointer' />
				</a>
				<a href=''>
					<AiFillGithub className='w-8 h-8 cursor-pointer' />
				</a>
				<a href=''>
					<AiFillLinkedin className='w-8 h-8 cursor-pointer' />
				</a>
			</div>
			{/* address */}
			<div className='my-5 py-4 bg-gray-200 dark:bg-dark-200 -mx-4 space-y-2'>
				<div className='flex items-center justify-center space-x-2'>
					<GoLocation />
					<span>Uzbekistan, Tashkent</span>
				</div>
				<p>mr.bekzod2018@gmail.com</p>
				<p>+998971574739</p>
			</div>

			{/* Email button */}
			<button
				className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 outline-none'
				onClick={() => window.open('https://t.me/bekhzodx64')}>
				Text Me
			</button>
			<button
				className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 outline-none'
				onClick={changeTheme}>
				Toggle Theme
			</button>
		</div>
	);
};

export default Sidebar;
