import Banner from "../../components/Navbar/Banner/Banner";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TinyBanner from "../../components/Navbar/Banner/TinyBanner";
import { useEffect, useState } from "react";
import axios from "axios";
import RecentQueries from "../../components/RecentQueries/RecentQueries";
import Blogs from "../../components/Blogs/Blogs";
import Testimonial from "../../components/Testimonials/Testimonial";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [loadedCards, setLoadedCards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allProducts").then((res) => {
      // console.log(res.data);
      setLoadedCards(res.data);
    });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <TinyBanner></TinyBanner>
      <RecentQueries loadedCards={loadedCards}></RecentQueries>
      <Blogs></Blogs>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
