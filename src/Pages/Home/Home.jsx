import Banner from '../../Component/Banner/Banner'
import CategoryList from '../../Component/CategoryList/CategoryList'
import FeaturedJobs from '../../Component/FeaturedJobs/FeaturedJobs';
const Home = () => {
    return (
        <div>
            <Banner/>
            <CategoryList/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;