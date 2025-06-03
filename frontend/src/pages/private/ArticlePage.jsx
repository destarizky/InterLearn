import Navbar from '../../components/private/Shared/Navbar';
import Banner from '../../components/private/CareerPage/Banner';
import Articles from '../../components/private/ArticlePage/Article';
import Footer from '../../components/public/shared/Footer';
const CareerPage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Articles />
            <Footer />
        </div>
    )
}
export default CareerPage;