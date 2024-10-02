import Carousel from "@/components/Home/Carousel/Carousel";
import Feature from "@/components/Home/Feature/Feature";
import OfferCard from "@/components/Home/OfferCard/OfferCard";
import Tours from "@/components/Home/Tours/Tours";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Feature />
      <Tours />
      <OfferCard />
    </>
  );
};

export default HomePage;