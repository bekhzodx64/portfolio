import { services } from '../data';
import ServiceCard from './../components/ServiceCard';

const index = () => {
	return (
		<div className='flex flex-col px-6 pt-1 flex-grow'>
			<h5 className='my-3 font-medium'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, esse?
				Quaerat doloremque id aperiam sint, provident quia cum obcaecati qui
				enim quam, tempore dicta, inventore assumenda eaque veritatis eos magni!
			</h5>
			<div className='p-4 mt-5 bg-gray-400 dark:bg-dark-500 -mx-6 flex-grow'>
				<h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
				<div className='grid lg:grid-cols-2 gap-6'>
					{services.map((service) => (
						<div className='lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg'>
							<ServiceCard service={service} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default index;