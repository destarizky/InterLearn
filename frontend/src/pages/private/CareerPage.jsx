import Navbar from '../../components/private/Shared/Navbar';
import Banner from '../../components/private/CareerPage/Banner';
import Videos from '../../components/private/CareerPage/Videos';
import Articles from '../../components/private/CareerPage/Articles';
import Footer from '../../components/public/shared/Footer';
const CareerPage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Videos />
            <Articles />
            <Footer />
        </div>
    )
}
export default CareerPage;