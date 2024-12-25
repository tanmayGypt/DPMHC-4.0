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
  const [showPopup, setShowPopup] = useState(true); // State to manage popup visibility
  const closePopup = () => setShowPopup(false);

  const [a, setA] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs();
        setBlogsData(response);

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
  return (
    <div>
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2 style={styles.title}>Service Update</h2>
            <p style={styles.message}>
              All our services and features are working perfectly! You can sign up to create your account and log in to book appointments and access more features. We are also excited to announce that more exciting features will be released soon. Stay tuned!
            </p>
            <button style={styles.button} onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}


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


const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  title: {
    margin: "0 0 10px",
    fontSize: "1.5rem",
    color: "#333",
  },
  message: {
    fontSize: "1rem",
    color: "#555",
    margin: "10px 0",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};