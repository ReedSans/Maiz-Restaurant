import { useState } from "react";
import { OutlineButton } from "../Buttons";
import { menuItems } from "../../menuItems";
import MenuFilters from "./MenuFilters";
import MenuDisplay from "./MenuDisplay";

const MenuSection = () => {
  const [displayItems, setDisplayItems] = useState(menuItems);

  const filterMenuItems = (category) => {
    setDisplayItems(
      menuItems.filter((item) => item.category.includes(category))
    );
  };

  const loadAllItems = () => {
    setDisplayItems(menuItems);
  };

  return (
    <section className="container mx-auto max-w-[1260px] mt-16 text-white">
      <MenuFilters filterMenuItems={filterMenuItems} loadAllItems={loadAllItems} />
      <MenuDisplay displayItems={displayItems} />
      <div className="flex justify-center">
      <OutlineButton border={'white'} bg={'pridarker'}>Show more</OutlineButton>
      </div>
    </section>
  )
}

export default MenuSection