import "./App.css";
import Timer from "./components/Timer";
import DateSection from "./sections/dates/DateSection";
import Description from "./sections/description/Description";
import HeroSection from "./sections/hero/HeroSection";

function App() {
  return (
    <>
      <div className="min-h-screen ">
        <Timer  />
        <HeroSection />
        <DateSection />
        <Description />
      </div>
    </>
  );
}

export default App;
