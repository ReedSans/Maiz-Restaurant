import Header from "../components/header/Header";
import MenuHero from "../components/menu/MenuHero";
import MenuSection from "../components/menu/MenuSection";
import { WorkingHours2 } from "../components/WorkingHours";


const MenuPage = () => {


  return (
    <>
      <Header />
      <main className="min-h-screen bg-pridarker pt-32 pb-48">
        <MenuHero />
        <MenuSection />
        <WorkingHours2 />
      </main>
    </>
  );
};

export default MenuPage;
