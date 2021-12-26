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
			<a>
				<span onClick={() => setActiveItem(name)} className='hover:text-green transition'>{name}</span>
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
		<div className='flex justify-between items-center px-5 py-3 my-3'>
			<span className='font-bold text-green text-xl border-b-4 border-green md:text-2xl select-none pointer-events-none'>
				{activeItem}
			</span>
			<div className='text-lg flex space-x-5 select-none'>
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
