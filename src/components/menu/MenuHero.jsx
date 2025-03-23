import React from 'react'

const MenuHero = () => {
  return (
    <section className="container mx-auto max-w-[1260px] text-white text-center lg:text-start flex flex-col lg:flex-row gap-8 mb-24">
      <div className="w-full lg:w-1/2">
        <span className="text-secdarker text-xs relative after:absolute after:content-[''] after:block after:h-px after:top-1/2 after:left-full after:ml-2 after:w-12 after:bg-white ">
          OUR Page
        </span>
        <h1 className="mt-5 text-6xl leading-[1.2]">
          Discover <br /> Our menu
        </h1>
      </div>
      <div className="w-full lg:w-1/2 self-center">
        <p className="w-full lg:w-3/5">
          There is a wide selection of choices served by top Saudi chefs,
          prepared using best quality local ingredients.
        </p>
      </div>
    </section>
  )
}

export default MenuHero