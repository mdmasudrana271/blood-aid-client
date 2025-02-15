import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AvailableDonor from "../AvailableDonor/AvailableDonor";
import WellcomeSection from "../WellcomeSection/WellcomeSection";
import ServiceBanner from "../ServiceBanner/ServiceBanner";
import RandomBanner from "../RandomBanner/RandomBanner";
import Campaign from "../Campaign/Campaign";
import RequestPost from "../RequestPost/RequestPost";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Blood Aid | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <AvailableDonor></AvailableDonor>
      </div>
      <div>
        <WellcomeSection></WellcomeSection>
      </div>
      <div>
        <RequestPost></RequestPost>
      </div>
      <div>
        <RandomBanner></RandomBanner>
      </div>
      <div>
        <Campaign></Campaign>
      </div>
      <div>
        <ServiceBanner></ServiceBanner>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
