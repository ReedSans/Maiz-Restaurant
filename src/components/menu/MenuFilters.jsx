import React from 'react'

const MenuFilters = ({ filterMenuItems, loadAllItems }) => {
  return (
    <ul className="flex justify-evenly lg:justify-start gap-0 lg:gap-5">
      <li>
        <button className="font-bold bg-transparent hover:bg-pridark py-1 px-2 rounded-md transition-all duration-300 ease-in-out" onClick={loadAllItems}>
          All
        </button>
      </li>
      <li>
        <button
          className="font-light text-prilighter bg-transparent hover:bg-pridark py-1 px-2 rounded-md transition-all duration-300 ease-in-out"
          onClick={() => filterMenuItems("Feast")}
        >
          Feast
        </button>
      </li>
      <li>
        <button
          className="font-light text-prilighter bg-transparent hover:bg-pridark py-1 px-2 rounded-md transition-all duration-300 ease-in-out"
          onClick={() => filterMenuItems("Coffee")}
        >
          Coffee
        </button>
      </li>
      <li>
        <button
          className="font-light text-prilighter bg-transparent hover:bg-pridark py-1 px-2 rounded-md transition-all duration-300 ease-in-out"
          onClick={() => filterMenuItems("Cocktails")}
        >
          Cocktails
        </button>
      </li>
      <li>
        <button
          className="font-light text-prilighter bg-transparent hover:bg-pridark py-1 px-2 rounded-md transition-all duration-300 ease-in-out"
          onClick={() => filterMenuItems("dessert")}
        >
          dessert
        </button>
      </li>
    </ul>
  )
}

export default MenuFilters