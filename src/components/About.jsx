import House from "./projectHome/House";
import Company from "./InfoAboutCompany/Company";
import MainTusks from "./mainTusks/MainTusks";
import OurProject from "./ourProjects/OurProject";
import ContactUs from "./contactUs/ContactUs";
import Footer from "./footer/Footer";
const About = () => {
  return (
    <div>
      <House />
      <Company />
      <MainTusks />
      <OurProject />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default About;
