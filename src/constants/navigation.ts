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
  User,
  Activity,
  Lock,
  Link,
  Globe,
  LayoutList,
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
  }[];
}

// Main Header
export const PAGES_NAV_ITEMS: NavInterface[] = [
  {
    title: ' Discover',
    path: '/services',
    submenu: true,
    subMenuItems: [
      {
        title: 'Browse Services',
        path: '/services',
      },
      {
        title: 'How to Earn',
        path: '/earn',
      },
      {
        title: 'Find Freelancers',
        path: '/search?q=freelancer',
      },
    ],
  },
  {
    title: 'My Work',
    path: '/work',
    submenu: true,
    subMenuItems: [
      {
        title: 'My Job Post',
        path: '/client/job-post',
      },
      {
        title: 'All Contracts',
        path: '/contracts',
      },

      {
        title: 'My Service Catalog',
        path: '/freelancer/service-catalog',
      },

      {
        title: 'Applied Proposals',
        path: '/freelancer/proposals',
      },
      {
        title: 'Orders',
        path: '/freelancer/orders',
      },
    ],
  },
  {
    title: 'Activity',
    path: '/activity',
    submenu: true,
    subMenuItems: [
      {
        title: 'Activity',
        path: '/activity',
      },
      {
        title: 'Buy Connects',
        path: '/connects',
      },
      {
        title: 'Transaction history',
        path: '/transaction-history',
      },
    ],
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
    title: 'Service',
    path: '/freelancer/service-catalog',
    submenu: false,
    icon: LayoutList,
  },
  {
    title: 'Job Post',
    path: '/client/job-post',
    submenu: false,
    icon: BriefcaseBusiness,
  },
  {
    title: 'Proposals',
    path: '/freelancer/proposals',
    submenu: false,
    icon: NotebookPen,
  },

  {
    title: 'Settings',
    path: '/settings',
    submenu: false,
    icon: Settings,
  },
];

// Settings Routes
export const SETTINGS_ROUTES = [
  {
    title: 'Personal Information',
    subtitle: 'Update your name, username, and profile picture',
    path: '/settings/personal-information',
    icon: UserCog,
  },
  {
    title: 'Profile Settings',
    subtitle: 'Edit your bio, skills, and professional title',
    path: '/settings/profile-settings',
    icon: UserCog,
  },
  {
    title: 'Address',
    subtitle: 'Add or update your address information',
    path: '/settings/address',
    icon: Home,
  },
  {
    title: 'Password & Security',
    subtitle: 'Update password and security settings',
    path: '/settings/password-and-security',
    icon: Fingerprint,
  },
  {
    title: 'Billing & Payments',
    subtitle: 'Manage payment methods and view billing history',
    path: '/settings/payment-methods',
    icon: CreditCard,
  },
  {
    title: 'Notifications',
    subtitle: 'Customize your notification preferences',
    path: '/settings/notification-settings',
    icon: Bell,
  },
  {
    title: 'Privacy',
    subtitle: 'Control who can see your profile and activity',
    path: '/settings/privacy',
    icon: Lock,
  },
  {
    title: 'Account Activity',
    subtitle: 'View and manage your account activity',
    path: '/settings/account-activity',
    icon: Activity,
  },
  {
    title: 'Connected Apps',
    subtitle: 'Manage apps connected to your account',
    path: '/settings/connected-apps',
    icon: Link,
  },
];

// Listing Routes
export const LISTING_ROUTES = [
  {
    title: 'Post a new service',
    path: '/listings/post-service',
    icon: NotebookPen,
  },
  {
    title: 'Post a new job',
    path: '/listings/post-job',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Response',
    path: '/listings/response',
    icon: MessageCircleReply,
  },
  {
    title: 'Archieved',
    path: '/listings/archieved',
    icon: Folder,
  },
];

// Work Routes
export const WORK_ROUTES = [
  {
    title: 'Proposals',
    path: '/work/proposals',
    icon: NotebookPen,
  },
  {
    title: 'Post a new job',
    path: '/listings/post-job',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Draft',
    path: '/listings/drafts',
    icon: SquarePen,
  },
  {
    title: 'Archieved',
    path: '/work/archieved',
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