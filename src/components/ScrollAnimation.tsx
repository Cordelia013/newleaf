import Lottie from "lottie-react";
import animationData from "../../public/assets/Defiler-vers-le-bas-New-Leaf (2).json";

const ScrollAnimation = () => {
  const style = {
    width: "12px",
    height: "20px",
  };

  return (
    <Lottie
      animationData={animationData}
      style={style}
      loop={true}
      autoplay={true}
      
    />
  );
};

export default ScrollAnimation;
