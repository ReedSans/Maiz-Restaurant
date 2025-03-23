const MenuDisplay = ({ displayItems }) => {
  return (
    <div className="menu-container | mt-16 mb-20 grid grid-cols-2 lg:grid-cols-3 gap-7 relative">
      {displayItems.map((item) => (
        <div className="group overflow-hidden bg-seclight border-2 border-secdarker">
          <img src={item.src} className="w-full h-full group-hover:scale-[1.1] group-hover:opacity-80 transition-all duration-500 ease-in-out " />
        </div>
      ))}
    </div>
  )
}

export default MenuDisplay