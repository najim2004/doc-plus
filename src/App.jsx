import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import OfferBanner from "./Components/OfferBanner";
import Service from "./Components/Service";
import Testimonial from "./Components/Testimonial";
import WhoWeAre from "./Components/WhoWeAre";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <WhoWeAre />
      <Service />
      <Testimonial />
      <Faq />
      <OfferBanner />
      <Footer />
    </div>
  );
}

export default App;
