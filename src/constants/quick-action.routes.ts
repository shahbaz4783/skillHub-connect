import { FaUserGear } from 'react-icons/fa6';
import {
	IoFingerPrint,
	IoNotificationsOutline,
} from 'react-icons/io5';
import { MdOutlinePayment } from 'react-icons/md';

interface QuickActionProps {
	title: string;
	path: string;
	icon: React.ElementType;
}

export const SETTINGS_ROUTES: QuickActionProps[] = [
	{
		title: 'Profile Settings',
		path: '/dashboard/settings/profile-settings',
		icon: FaUserGear,
	},
	{
		title: 'Password & Security',
		path: '/dashboard/settings/password-and-security',
		icon: IoFingerPrint,
	},
	{
		title: 'Billing & Payments',
		path: '/dashboard/settings/payment-methods',
		icon: MdOutlinePayment,
	},
	{
		title: 'Notification settings',
		path: '/dashboard/settings/notification-settings',
		icon: IoNotificationsOutline,
	},
];