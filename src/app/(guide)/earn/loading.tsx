import Banner from '@/components/loaders/Banner';
import Heading from '@/components/loaders/Heading';

const loading = () => {
	return (
		<div className='w-10/12 mt-4 m-auto'>
			<Banner />
			<Heading />
		</div>
	);
};

export default loading;
