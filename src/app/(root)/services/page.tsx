import JobCard from '@/components/cards/JobCard';
import ServiceCard from '@/components/cards/ServiceCard';
import DescHeading from '@/components/ui/DescHeading';
import { getAllServiceListings } from '@/data/user-listings';
import Link from 'next/link';

const JobDetails = async () => {
	const listings = await getAllServiceListings();

	return (
		<main className='my-12'>
			<DescHeading
				heading='Browse and buy projects'
				subhead='Complete your most pressing work with Project Catalog. Browse and buy predefined projects in just a few clicks'
			/>
			<section className='grid md:grid-cols-4 gap-8'>
				{listings?.listings.map((data) => (
					<Link key={data.id} href={`/services/${data.id}`}>
						<ServiceCard
							title={data.title}
							price={data.price}
							profile={data.userId}
							rating={3}
							totalRating={5}
							days={8}
						/>
					</Link>
				))}
			</section>
		</main>
	);
};

export default JobDetails;
