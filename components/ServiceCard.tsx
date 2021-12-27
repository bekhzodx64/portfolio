import { FunctionComponent } from 'react';
import { IService } from './../type';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
	service: { Icon, about, title },
}) => {
	const createMarkup = () => {
		return {
			__html: about,
		};
	};

	return (
		<div className='px-3 py-5 lg:px-5 lg:py-3 flex items-center relative'>
			<div className='absolute -top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-dark-100 rounded-full w-14 h-14 overflow-hidden flex items-center justify-center'>
				<Icon className='w-10 h-10 text-green ' />
			</div>
			<div className='flex-1'>
				<h4 className='font-bold'>{title}</h4>
				<p dangerouslySetInnerHTML={createMarkup()} />
			</div>
		</div>
	);
};

export default ServiceCard;
