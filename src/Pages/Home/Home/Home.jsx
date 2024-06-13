import AboutUs from "../AboutUs/AboutUs/AboutUs";
import AdvertisementSection from "../AdvertisementSection/AdvertisementSection";
import Banner from "../Banner/Banner";
import Properties from "../Properties/Properties";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div className="space-y-28">
            <Banner></Banner>
            <Properties></Properties>
            <AdvertisementSection></AdvertisementSection>
            <AboutUs></AboutUs>
            <Review></Review>
            {/* TODO: make another unique section */}
        </div>
    );
};

export default Home;