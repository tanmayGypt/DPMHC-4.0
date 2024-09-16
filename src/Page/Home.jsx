import About from "../Page_Components/Home/About";
import Blog from "../Page_Components/Home/Blog";
import Featured_Videos from "../Page_Components/Home/Featured_Videos";
import Header from "../Page_Components/Home/Header";
// import ElfsightWidget from "../Page_Components/Home/GoogleMapEmbed";
import Medicines from "../Page_Components/Home/Medicines";
import GoogleMapEmbed from "../Page_Components/Home/GoogleMapEmbed";
import {
  ScrollContainer,
  Animator,
  batch,
  Fade,
  Move,
  Sticky,
  ZoomIn,
} from "react-scroll-motion";

function Home() {
  return (
    <div>
      <ScrollContainer>
        <Header />
        <About />
        <Medicines />
        <Blog />
        <Featured_Videos />
        <GoogleMapEmbed />
      </ScrollContainer>
    </div>
  );
}

export default Home;
