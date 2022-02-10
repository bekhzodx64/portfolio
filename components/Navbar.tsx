import { useEffect, useState, FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
	activeItem: string;
	setActiveItem: Function;
	name: string;
	route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
	return activeItem !== name ? (
		<Link href={route}>
			<a onClick={() => setActiveItem(name)} className='hover:text-green transition'>
				{name}
			</a>
		</Link>
	) : null;
};

const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>('');

	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === '/') setActiveItem('Обо мне');
		if (pathname === '/projects') setActiveItem('Проекты');
		if (pathname === '/resume') setActiveItem('Резюме');
	}, []);

	return (
		<div className='mb-6 flex items-center justify-between'>
			<span className='text-green border-green pointer-events-none select-none border-b-4 text-lg font-bold sm:text-xl md:text-2xl'>
				{activeItem}
			</span>
			<div className='flex select-none space-x-5 text-base print:hidden sm:text-lg'>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='Обо мне'
					route='/'
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='Проекты'
					route='/projects'
				/>
				<NavItem
					activeItem={activeItem}
					setActiveItem={setActiveItem}
					name='Резюме'
					route='/resume'
				/>
			</div>
		</div>
	);
};

export default Navbar;
