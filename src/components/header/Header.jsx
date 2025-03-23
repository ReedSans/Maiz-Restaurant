import React, { useState } from "react";
import Button from "../Buttons";
import { Link } from "react-router-dom";
import MobileMenu, { MobileMenu2 } from "./MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <header className="bg-pridarker">
      <div className="container mx-auto max-w-[1400px] relative">
        <img
          src="../../images/Rectangle.png"
          alt=""
          className=" hidden lg:inline-block absolute left-0 -top-8 w-1/2 z-0 pointer-events-none"
        />
        <nav className="relative flex justify-between items-start h-[200px] pt-11 text-xl text-white ">
          <img
            src={`../../images/logo-${isOpen ? 'black' : 'white'}.png`}
            alt=""
            className={`${
              isOpen ? "fixed" : "absolute"
            } h-[100px] lg:h-full lg:static z-20`}
          />
          <ul className="hidden lg:flex py-3 ml-16">
            <li className="mx-11 font-inter font-light">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-11 font-inter font-light">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="mx-11 font-inter font-light">
              <Link to="/">Venue</Link>
            </li>
            <li className="mx-11 font-inter font-light">
              <Link to="/">Events</Link>
            </li>
          </ul>
          <div className="relative mt-2">
            <div className="hidden lg:block">
              <Button bg={"secdarker"} text={"pridarker"}>
                Book Now
              </Button>
              <img
                src="../../images/Group-1.svg"
                alt=""
                className="absolute -right-10 top-[-22px] z-0"
              />
            </div>
          </div>
          <MobileMenu isOpen={isOpen} toggle={toggleNavMenu} />
        </nav>
      </div>
    </header>
  );
};

export const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <header className="bg-secdarker">
      <div className="container mx-auto max-w-[1400px] relative ">
        <img
          src="../../images/Rectangle.png"
          alt=""
          className=" hidden lg:inline-block absolute left-0 -top-8 w-1/2 z-0 pointer-events-none"
        />
        <nav className="relative h-[200px] pt-11 text-xl text-pridarker flex justify-between items-start">
          <img
            src={`../../images/logo-${isOpen ? 'white' : 'black'}.png`}
            alt=""
            className={`${
              isOpen ? "fixed" : "absolute"
            } fixed h-[100px] lg:h-full lg:static z-20`}
          />
          <ul className="hidden lg:flex py-3 ml-16">
            <li className="mx-11 font-inter font-light">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-11 font-inter font-light">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="mx-11 font-inter font-light">
              <Link to="/">Venue</Link>
            </li>
            <li className="mx-11 font-inter font-light">
              <Link to="/">Events</Link>
            </li>
          </ul>
          <div className="relative mt-2">
            <div className="hidden lg:block">
              <Button bg={"pridarker"} text={"secdarker"}>
                Book Now
              </Button>
              <img
                src="../../images/Group-1.svg"
                alt=""
                className="absolute -right-10 top-[-22px] z-0"
              />
            </div>
          </div>
          <MobileMenu2 isOpen={isOpen} toggle={toggleNavMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
