import {
  BriefcaseBusiness,
  CirclePlus,
  Home,
  LayoutDashboard,
  Settings,
  Bell,
  CreditCard,
  Fingerprint,
  NotebookPen,
  Pause,
  SquarePen,
  UserCog,
  CircleHelp,
  Send,
  Folder,
  MessageCircleReply,
} from 'lucide-react';

interface NavInterface {
  title: string;
  path: string;
  icon?: React.ElementType;
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null;

  submenu: boolean;
  subMenuItems?: {
    title: string;
    path: string;
    icon?: React.ElementType;
  };
}

// Main Header
export const PAGES_NAV_ITEMS: NavInterface[] = [
  {
    title: 'Find Talent',
    path: '/services',
    submenu: false,
  },
  {
    title: 'Find Work',
    path: '/freelance-jobs',
    submenu: false,
  },
  {
    title: 'Support',
    path: '/support',
    submenu: false,
  },
];

// Auth routes
export const AUTH_NAV_ITEMS: NavInterface[] = [
  {
    title: 'Login',
    path: '/login',
    submenu: false,
    variant: 'ghost',
  },
  {
    title: 'Register',
    path: '/signup',
    submenu: false,
    variant: 'default',
  },
];

// User Dashboard Routes
export const ADMIN_NAV_ITEMS: NavInterface[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    submenu: false,
    icon: LayoutDashboard,
  },
  {
    title: 'Work',
    path: '/dashboard/work',
    submenu: false,
    icon: BriefcaseBusiness,
  },
  {
    title: 'Listings',
    path: '/dashboard/listings',
    submenu: false,
    icon: CirclePlus,
  },
  {
    title: 'Settings',
    path: '/dashboard/settings',
    submenu: false,
    icon: Settings,
  },
];

// User Dashboard routes (mobile)
export const BOTTOM_NAV_ITEMS: NavInterface[] = [
  {
    title: 'Home',
    path: '/',
    submenu: false,
    icon: Home,
  },
  {
    title: 'Work',
    path: '/dashboard/work',
    submenu: false,
    icon: BriefcaseBusiness,
  },
  {
    title: 'Listings',
    path: '/dashboard/listings',
    submenu: false,
    icon: CirclePlus,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    submenu: false,
    icon: LayoutDashboard,
  },

  {
    title: 'Settings',
    path: '/dashboard/settings',
    submenu: false,
    icon: Settings,
  },
];

// Settings Routes
export const SETTINGS_ROUTES = [
  {
    title: 'Profile Settings',
    path: '/dashboard/settings/profile-settings',
    icon: UserCog,
  },
  {
    title: 'Password & Security',
    path: '/dashboard/settings/password-and-security',
    icon: Fingerprint,
  },
  {
    title: 'Billing & Payments',
    path: '/dashboard/settings/payment-methods',
    icon: CreditCard,
  },
  {
    title: 'Notification settings',
    path: '/dashboard/settings/notification-settings',
    icon: Bell,
  },
];

// Listing Routes
export const LISTING_ROUTES = [
  {
    title: 'Post a new service',
    path: '/dashboard/listings/post-service',
    icon: NotebookPen,
  },
  {
    title: 'Post a new job',
    path: '/dashboard/listings/post-job',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Response',
    path: '/dashboard/listings/response',
    icon: MessageCircleReply,
  },
  {
    title: 'Archieved',
    path: '/dashboard/listings/archieved',
    icon: Folder,
  },
];

// Work Routes
export const WORK_ROUTES = [
  {
    title: 'Proposals',
    path: '/dashboard/work/proposals',
    icon: NotebookPen,
  },
  {
    title: 'Post a new job',
    path: '/dashboard/listings/post-job',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Draft',
    path: '/dashboard/listings/drafts',
    icon: SquarePen,
  },
  {
    title: 'Archieved',
    path: '/dashboard/work/archieved',
    icon: Folder,
  },
];

export const loggedInExtraNav = [
  {
    title: 'Help',
    path: '/help',
    icon: CircleHelp,
  },
  {
    title: 'Direct Contracts',
    path: '/help',
    icon: Send,
  },
  {
    title: 'Apps and Offers',
    path: '/help',
    icon: LayoutDashboard,
  },
  {
    title: 'Notifications',
    path: '/help',
    icon: Bell,
  },
];