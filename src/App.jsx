import Faq from "./Components/Faq";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
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
    </div>
  );
}

export default App;
