import React from "react";

const Button = ({ children, bg, text }) => {
  return (
    <a href="" className={`cursor-pointer bg-${bg} font-slim text-xl text-${text} py-5 px-9`}>
      {children}
    </a>
  );
};

export const OutlineButton = ({ children, border, bg }) => {
  return (
    <a href="/" className={`cursor-pointer border-4 border-${border} hover:border-${bg}  
    bg-${bg} hover:bg-${border} font-slim text-2xl lg:text-xl text-${border} hover:text-${bg} transition-all duration-300 ease-in-out py-5 px-9 w-full lg:w-auto text-center`} 
    // data-aos="fade-right" data-aos-delay="1600" data-aos-duration="500"
    >
      {children}
    </a>
  );
};

export const RaisedButton = ({ children }) => {
  return (
    <button href="" className="cursor-pointer relative bg-secdarker font-slim text-xl text-pridarker w-full lg:w-auto py-5 px-9 ml-2 before:absolute before:-left-2 before:top-2 before:w-full before:h-full before:border-2 before:border-secdarker before:content-['']">
      {children}
    </button>
  );
};

export default Button;
