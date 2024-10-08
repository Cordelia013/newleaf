import { useEffect, useRef } from "react"; 

function CarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.firstElementChild;
        if (firstChild) {
          carouselRef.current.appendChild(firstChild);
        }
      }
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-full overflow-hidden xl:max-w-7xl -mt-80">
      <div ref={carouselRef} className="flex space-x-5 p-4 min-w-max">
        <img
          src="/assets/images/img10.png"
          alt="Image 1"
          className="w-[217px] h-[217px] object-cover origin-top-lef rotate-6 bg-neutral-950/20"
        />
        <img
          src="/assets/images/img11.png"
          alt="Image 2"
          className="w-[217px] h-[217px] object-cover origin-top-lef -rotate-4 bg-neutral-950/20"
        />
        <img
          src="/assets/images/img12.png"
          alt="Image 3"
          className="w-[217px] h-[217px] object-cover origin-top-lef -rotate-12 bg-neutral-950/20"
        />
        <img
          src="/assets/images/img13.png"
          alt="Image 5"
          className="w-[217px] h-[217px] object-cover origin-top-lef rotate-2 bg-neutral-950/20"
        />
        <img
          src="/assets/images/img14.png"
          alt="Image 4"
          className="w-[217px] h-[217px] object-cover origin-top-lef -rotate-2 bg-neutral-950/20"
        />
        <img
          src="/assets/images/img15.png"
          alt="Image 5"
          className="w-[217px] h-[217px] object-cover origin-top-lef -rotate-8 bg-neutral-950/20"
        />
      </div>
    </div>
  );
}

export default CarouselSection;
