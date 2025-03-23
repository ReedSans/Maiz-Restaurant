import React from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/home/HeroSection";
import VideoDisplay from "../components/home/VideoDisplay";
import Venue from "../components/home/Venue";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-pridarker pt-16">
        <HeroSection />
        <Venue />
        <VideoDisplay />
        <section className="mt-16 lg:mt-32"><img src="../../images/Frame 227.png" alt="" /></section>
      </main>
    </>
  );
};

export default HomePage;
