import { FunctionComponent } from 'react';
import { Category } from '../type';

export const NavItem: FunctionComponent<{
	value: Category | 'Все';
	handlerFilterCategory: Function;
	active: string;
}> = ({ value, handlerFilterCategory, active }) => {
	let className = 'cursor-pointer hover:text-green capitalize bg-slate-200 dark:bg-dark-200 py-1 px-4 rounded-lg select-none';

	if (active === value) className += ' text-green';

	return (
		<li className={className} onClick={() => handlerFilterCategory(value)}>
			{value}
		</li>
	);
};

const ProjectsNavbar: FunctionComponent<{
	handlerFilterCategory: Function;
	active: string;
}> = (props) => {
	return (
		<div className='flex space-x-3 list-none mb-5 overflow-x-auto'>
			<NavItem value='Все' {...props} />
			<NavItem value='html' {...props} />
			<NavItem value='react' {...props} />
			<NavItem value='node' {...props} />
		</div>
	);
};

export default ProjectsNavbar;
