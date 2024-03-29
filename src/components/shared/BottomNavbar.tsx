import { BOTTOM_NAV_ITEMS } from '@/constants/navigation.routes';
import Link from 'next/link';
import React from 'react';

const BottomNavbar = () => {
	return (
		<nav className='bg-slate-300 p-2 backdrop-blur flex justify-center md:hidden sticky bottom-2 w-11/12 m-auto rounded-full border gap-6 '>
			{BOTTOM_NAV_ITEMS.map((data, index) => (
				<Link
					key={index}
					href={data.path}
					className='flex flex-col gap-2 items-center p-2 rounded-md'
				>
					{data.icon && <data.icon size={28} />}
				</Link>
			))}
		</nav>
	);
};

export default BottomNavbar;
