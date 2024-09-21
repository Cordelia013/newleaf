

function CarouselSection() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-4 p-4 min-w-max">
        <img
          src="src/assets/images/img10.png"
          alt="Image 1"
          className="w-[317px] h-[317px] object-cover"
        />
        <img
          src="src/assets/images/img11.png"
          alt="Image 2"
          className="w-[317px] h-[317px] object-cover"
        />
        <img
          src="src/assets/images/img12.png"
          alt="Image 3"
          className="w-[317px] h-[317px] object-cover"
        />
        <img
          src="src/assets/images/img14.png"
          alt="Image 4"
          className="w-[317px] h-[317px] object-cover"
        />
        <img
          src="src/assets/images/img15.png"
          alt="Image 5"
          className="w-[317px] h-[317px] object-cover"
        />
    
      </div>
    </div>
  );
}

export default CarouselSection