import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { FC } from 'react';
import { FaStar, FaUser } from 'react-icons/fa6';

interface ServiceCardProps {
	title: string;
	img: string;
	price: number;
	days: number;
	profile: string;
	rating: number;
	totalRating: number;
}

const ServiceCard: FC<ServiceCardProps> = ({
	title,
	img,
	price,
	profile,
	rating,
	totalRating,
}) => {
	return (
		<Card className=''>
			<CardHeader>
				<Image src={img} width={500} height={500} alt='' className='object-contain aspect-square' />
			</CardHeader>
			<CardContent className='flex flex-col gap-2 justify-between'>
				<div className='flex gap-2 items-center'>
					<FaUser />
					<CardTitle>{profile}</CardTitle>
				</div>
				<p className='line-clamp-2'>{title}</p>
			</CardContent>
			<CardFooter className='flex-col items-start'>
				<div className='flex items-center gap-1'>
					<FaStar />
					<p className='font-semibold'>{rating}</p>
					<p className='font-light'>({totalRating})</p>
				</div>
				<div>
					<p className='font-semibold'>From ${price}</p>
				</div>
			</CardFooter>
		</Card>
	);
};

export default ServiceCard;