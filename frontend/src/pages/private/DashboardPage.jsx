import Navbar from '../../components/private/Shared/Navbar';
import Promotion from '../../components/private/DashboardPage/PromotionBar';
import Recently from '../../components/private/DashboardPage/Recently';
import Trending from '../../components/private/DashboardPage/Trending';

const DashboardPage = () => {
    return (
        <div>
            <Navbar />
            <Promotion />
            <Recently />
            <Trending />
        </div>
    )
}
export default DashboardPage;