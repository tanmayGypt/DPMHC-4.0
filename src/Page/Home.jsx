import About from "../Page_Components/Home/About";
import Blog from "../Page_Components/Home/Blog";
import Featured_Videos from "../Page_Components/Home/Featured_Videos";
import Header from "../Page_Components/Home/Header";
import Medicines from "../Page_Components/Home/Medicines";
import GoogleMapEmbed from "../Page_Components/Home/GoogleMapEmbed";
import { ScrollContainer } from "react-scroll-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAlerts, getBlogs } from "../../api";

function Home() {
  const [blogsData, setBlogsData] = useState([]);
  const [notificationData, setNotificationData] = useState([]);

  const [a, setA] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs();
        setBlogsData(response);
        console.log(response)
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }

    };
    const fetchAlerts = async () => {
      const resp = await getAlerts();
      if (resp) setNotificationData(resp);
    }
    fetchAlerts()
    fetchBlogs();

  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

      <ScrollContainer>
        <Header notificationData={notificationData} />
        <About />
        <Medicines blogsData={blogsData} />
        <Blog blogsData={blogsData} />
        <Featured_Videos />
        <GoogleMapEmbed />
      </ScrollContainer>
    </div>
  );
}

export default Home;
