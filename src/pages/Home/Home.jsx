import Banner from "../../components/Navbar/Banner/Banner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TinyBanner from "../../components/Navbar/Banner/TinyBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TinyBanner></TinyBanner>
    </div>
  );
};

export default Home;
