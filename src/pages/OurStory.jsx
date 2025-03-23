import React from "react";
import { Header2 } from "../components/header/Header";
import WorkingHours from "../components/WorkingHours";
import Milestones from "../components/about/Milestones";
import AboutHero from "../components/about/AboutHero";

const OurStory = () => {

  return (
    <>
    <Header2 />
    <main className={`min-h-screen bg-secdarker pt-36 pb-0`}>
      <AboutHero />
      <Milestones />
      <WorkingHours />
    </main>
    
    </>
  );
};

export default OurStory;
