import "./App.css";
import Footer from "./components/footer";
import Timer from "./components/Timer";
import CarouselSection from "./sections/carousel/CarouselSection";
import DateSection from "./sections/dates/DateSection";
import DescriptionSection from "./sections/description/DescriptionSection";
import HeroSection from "./sections/hero/HeroSection";

function App() {
  return (
    <>
      <div className="min-h-screen ">
        <Timer />
        <HeroSection />
        <DateSection />
      </div>
      <DescriptionSection />
      <CarouselSection />
      <Footer />
    </>
  );
}

export default App;
