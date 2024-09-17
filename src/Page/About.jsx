import { useEffect } from "react";
import AboutSection from "../Page_Components/Home/About";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutSection />
    </div>
  );
}

export default About;
