import ScrollAnimation from "../../components/ScrollAnimation";


function HeroSection() {
  return (
    <>
      <section className=" relative -top-52">
        <div className="container mx-auto px-4">
          <img
            className="absolute top-0 left-0 right-0 bottom-0 m-auto -z-10"
            src="public/assets/img1.jpg"
            alt="bg-artiste-hero"
          />

          <div className="">
            <header className="  flex justify-between items-center ">
              <img
                src="public/assets/NewLeaf-logo.svg"
                width="80px"
                height="60px"
                alt="New Leaf Logo"
              />
              <img
                className="relative right-64 "
                src="public/assets/images/language/France-flat.svg"
                width="24px"
                height="24px"
                alt="icon-france-flat"
              />
            </header>

            <h1 className="font-Desirable-Sans text-[16rem] leading-none mt-80">
              New Leaf
              <br />{" "}
              <span className="font-Desirable-Brust text-center text-[#CC001E] text-8xl block -mt-10">
                World Tour
              </span>
            </h1>

            <div className="flex flex-col items-center gap-2 mt-6">
              {/* <img src="public/assets/Scroll.svg" alt="icone scrollHero" /> */}
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
