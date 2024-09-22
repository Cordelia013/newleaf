function DescriptionSection() {


  
  return (
    <section className="py-32 mt-96">
      <div className="container px-4 ">
        <div className="h-[391px] pt-10 flex-col justify-center items-start inline-flex">
          <img
            className="w-48 h-[268px] origin-top-left rotate-[4deg] bg-neutral-950/20"
            src="/assets/images/img3.jpg"
            alt="bg-artiste-hero"
          />
        </div>
        <div className="flex flex-col items-center ">
          <h3 className=" font-Desirable-Brust text-[#CC001E] opacity-60 mix-blend-difference text-8xl mt-36  font-normal ">
            Hip Hop
          </h3>
          <div className=" w-[440px] opacity-60  text-sm font-['Montserrat'] mt-20  ">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte.
          </div>
        </div>
        <div className="h-[368px] pt-10 flex justify-center items-center ">
          <img
            className="w-48 origin-top-left rotate-6 bg-neutral-950/20"
            src="/assets//images/img4.jpg"
            alt="bg-artiste-concert-piano"
          />
        </div>

        <div className="h-[492px] mt-56 flex justify-start items-center ">
          <img
            className="w-64 origin-top-left -rotate-2 bg-neutral-950/20"
            src="/assets/images/img5.jpg"
            alt="bg-artiste-pianiste"
          />
        </div>

        <div className="h-[407px] mt-56 mr-80 flex justify-end items-center ">
          <img
            className="w-64 origin-top-left rotate-2 bg-neutral-950/20"
            src="/assets/images/img6.jpg"
            alt="bg-artiste-pianiste"
          />
        </div>

        <div className="flex flex-col items-center ">
          <h3 className=" font-Desirable-Brust text-[#CC001E] opacity-60 mix-blend-difference text-8xl mt-44  font-normal ">
            Symphonie
          </h3>
          <div className=" w-[440px] opacity-60  text-sm font-['Montserrat'] mt-20  ">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500.
          </div>
        </div>

        <div className="h-[407px] mt-56 flex justify-end items-center ">
          <img
            className="w-64 origin-top-left -rotate-[6deg] bg-neutral-950/20"
            src="/assets/images/img7.jpg"
            alt="bg-artiste-pianiste"
          />
        </div>

        <div className="flex flex-col items-center ">
          <div className="opacity-40 text-center text-[1080px] font-normal font-['Desirable-Sans'] text-transparent bg-clip-text stroke-2 stroke-black">
            44
          </div>
          <h3 className="font-Desirable-Brust text-center text-[#CC001E] text-8xl block -mt-[568px]">
            Musiciens
          </h3>
          <div className=" w-[440px] opacity-60  text-sm font-['Montserrat'] mt-20  ">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte.
          </div>
        </div>
        <div className="h-[268px] pt-10 -top-60 flex justify-center items-center relative bottom-28 -z-10">
          <img
            className="w-96 "
            src="/assets/images/img8.png"
            alt="bg-artiste-concert-piano"
          />
        </div>
      </div>
      <div className="relative top-18">
        <h1 className="font-Desirable-Sans text-[196px] leading-none relative top-48 ">
          sch
          <br />{" "}
          <span className="font-Desirable-Brust ml-14 text-[#CC001E] text-8xl block -mt-8">
            Artiste
          </span>
        </h1>
        <div className=" w-[341px] opacity-60  text-xs font-['Montserrat'] mt-64  ">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500.
        </div>

        <div className="relative -top-60  flex justify-end items-center ">
          <img
            className="w-[680px]  bg-neutral-950/20"
            src="/assets/images/img9.png"
            alt="bg-artiste-pianiste"
          />
        </div>
      </div>
    </section>
  );
}

export default DescriptionSection;
