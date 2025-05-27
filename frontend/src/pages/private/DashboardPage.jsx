import Navbar from '../../components/private/Shared/Navbar';
import Promotion from '../../components/private/DashboardPage/PromotionBar';
import Recently from '../../components/private/DashboardPage/Recently';
import Trending from '../../components/private/DashboardPage/Trending';
import Personalized from '../../components/private/DashboardPage/Personalized';
import Courses from '../../components/private/DashboardPage/Courses';

const DashboardPage = () => {
    return (
        <div>
            <Navbar />
            <Promotion />
            <Recently />
            <Trending />
            <Personalized />
            <Courses />
        </div>
    )
}
export default DashboardPage;