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
			<div className='pointer-events-none relative inline-block select-none print:hidden'>
				<Image src='/avatar.png' alt='User Avatar' className='mx-auto rounded-full' width={128} height={128} layout='intrinsic' quality={100} />
				<div className='bg-green absolute bottom-[15px] right-[15px] h-4 w-4 rounded-full '>
					<div className='bg-green h-4 w-4 animate-ping rounded-full'></div>
				</div>
			</div>
			<h3 className='font-kaushan pointer-events-none relative my-4 select-none text-3xl font-medium tracking-wider print:my-0'>
				<span>#Bekhzod</span>
				<span>_x64</span>
			</h3>
			<p className='dark:bg-dark-200 pointer-events-none my-3 select-none rounded-full bg-slate-200 px-2 py-1 print:my-2'>Веб разработчик</p>
			<a className='dark:bg-dark-200 my-3 flex cursor-not-allowed select-none items-center justify-center rounded-full bg-slate-200 px-2 py-1 print:hidden'>
				<GiTie className='h-6 w-6' />
				Скачать CV
			</a>
			<div className='text-green mx-auto my-5 flex w-9/12 justify-around print:hidden md:w-full'>
				<a className='cursor-not-allowed'>
					<AiFillYoutube className='h-8 w-8' />
				</a>
				<a href='https://t.me/bekhzodx64' target='_blank' rel='noreferrer'>
					<BsTelegram className='h-8 w-8' />
				</a>
				<a className='cursor-not-allowed'>
					<AiFillGithub className='h-8 w-8' />
				</a>
			</div>
			<div className='dark:bg-dark-200 my-5 -mx-7 space-y-2 bg-slate-200 py-4 print:my-2 print:py-0'>
				<div className='flex items-center justify-center space-x-2'>
					<GoLocation />
					<span>Узбекистан, Ташкент</span>
				</div>
				<div>
					<a href='mailto:mr.bekzod2018@gmail.com' className='inline-block'>
						mr.bekzod2018@gmail.com
					</a>
				</div>
				<div>
					<a href='tel:+998971574739' className='inline-block'>
						+998 (97) 157 47 39
					</a>
				</div>
			</div>
			<div className='print:hidden md:flex md:gap-x-10 lg:flex-col lg:items-center'>
				<button
					className='from-green my-2 w-8/12 select-none rounded-full bg-gradient-to-r to-blue-400 px-4 py-2 text-white outline-none'
					onClick={() => window.open('https://t.me/bekhzodx64')}>
					Связяться
				</button>
				<button
					className='from-green my-2 w-8/12 select-none rounded-full bg-gradient-to-r to-blue-400 px-4 py-2 text-white outline-none'
					onClick={changeTheme}>
					Сменить тему
				</button>
			</div>
		</Fragment>
	);
};

export default Sidebar;
