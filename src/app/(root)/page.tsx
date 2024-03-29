import { auth } from '@/auth';
import LandingPage from '../../components/static/LandingPage';
import LoginHomePage from '@/components/feed/LoginHomePage';

const Home = async () => {
	const session = await auth();

	return <>{session ? <LoginHomePage /> : <LandingPage />}</>;
};

export default Home;
