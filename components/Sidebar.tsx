import Image from 'next/image';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import { Fragment } from 'react';

const Sidebar = () => {
	const { theme, setTheme } = useTheme();
	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<Fragment>
			<div className='relative inline-block select-none pointer-events-none'>
				<Image
					src='/avatar.png'
					alt='User Avatar'
					className='rounded-full mx-auto'
					width={128}
					height={128}
					layout='intrinsic'
					quality={100}
				/>
				<div className='absolute w-4 h-4 rounded-full bg-white bottom-[15px] right-[15px] '>
					<div className='w-4 h-4 rounded-full bg-green animate-pulse'></div>
				</div>
			</div>
			<h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan select-none pointer-events-none'>
				<span>#Bekhzod</span>
				<span>_x64</span>
			</h3>
			<p className='px-2 py-1 my-3 bg-slate-200 dark:bg-dark-200 rounded-full select-none pointer-events-none'>
				Веб разработчик
			</p>
			<a
				href='/images/mogo.png'
				className='px-2 py-1 my-3 bg-slate-200 dark:bg-dark-200 rounded-full flex items-center justify-center select-none'
				download='mogo.png'>
				<GiTie className='w-6 h-6' />
				Скачать CV
			</a>
			<div className='flex justify-around my-5 text-green w-9/12 md:w-full mx-auto'>
				<a className='cursor-not-allowed'>
					<AiFillYoutube className='w-8 h-8' />
				</a>
				<a href='https://t.me/bekhzodx64' target='_blank'>
					<BsTelegram className='w-8 h-8' />
				</a>
				<a className='cursor-not-allowed'>
					<AiFillGithub className='w-8 h-8' />
				</a>
			</div>
			<div className='my-5 py-4 bg-slate-200 dark:bg-dark-200 -mx-7 space-y-2'>
				<div className='flex items-center justify-center space-x-2'>
					<GoLocation />
					<span>Узбекистан, Ташкент</span>
				</div>
				<a href='mailto:mr.bekzod2018@gmail.com' className='inline-block'>
					mr.bekzod2018@gmail.com
				</a>
				<a href='tel:+998971574739' className='inline-block'>
					+998 (97) 157 47 39
				</a>
			</div>

			<button
				className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-4 text-white my-2 outline-none select-none'
				onClick={() => window.open('https://t.me/bekhzodx64')}>
				Связяться
			</button>
			<button
				className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-4 text-white my-2 outline-none select-none'
				onClick={changeTheme}>
				Сменить тему
			</button>
		</Fragment>
	);
};

export default Sidebar;
