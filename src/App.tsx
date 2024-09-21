import "./App.css";
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
    </>
  );
}

export default App;
