import Navbar from '../../components/private/Shared/Navbar';
import Promotion from '../../components/private/DashboardPage/PromotionBar';
import Recently from '../../components/private/DashboardPage/Recently';

const DashboardPage = () => {
    return (
        <div>
            <Navbar />
            <Promotion />
            <Recently />
        </div>
    )
}
export default DashboardPage;