import { FunctionComponent } from 'react';
import { IService } from './../type';

const ServiceCard: FunctionComponent<{ service: IService }> = ({ service: { Icon, about, title } }) => {
	const createMarkup = () => {
		return {
			__html: about,
		};
	};

	return (
		<div className='relative flex items-center px-3 py-5 lg:px-5 lg:py-3'>
			<div className='dark:bg-dark-100 absolute -top-6 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-white'>
				<Icon className='text-green h-10 w-10 ' />
			</div>
			<div className='flex-1'>
				<h3 className='font-bold'>{title}</h3>
				<p dangerouslySetInnerHTML={createMarkup()} />
			</div>
		</div>
	);
};

export default ServiceCard;
