import LanguageSelector from "../../components/LanguageSelector";
import ScrollAnimation from "../../components/ScrollAnimation";

function HeroSection() {
  return (
    <>
      <section className=" relative -top-44">
        <div className="container mx-auto px-4">
          <img
            className="absolute -top-32 left-0 right-0 bottom-0 m-auto -z-10"
            src="/assets/images/img1.jpg"
            alt="bg-artiste-hero"
          />

          <div className="">
            <header className="flex justify-between items-center relative -top-20">
              <img
                src="/assets/NewLeaf-logo.svg"
                width="80px"
                height="60px"
                alt="New Leaf Logo"
              />

              <LanguageSelector />
            </header>

            <h1 className="font-Desirable-Sans text-[15rem] leading-none mt-[10rem]">
              New Leaf
              <br />{" "}
              <span className="font-Desirable-Brust text-center text-[#CC001E] text-8xl block -mt-10">
                World Tour
              </span>
            </h1>

            <div className="flex flex-col items-center gap-2 mt-6">
              {/* <img src="../../assets/Scroll.svg" alt="icone scrollHero" /> */}
              <ScrollAnimation />
              <p className="text-xs">Défiler vers le bas </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
