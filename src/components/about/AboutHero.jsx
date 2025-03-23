import React from 'react'

const AboutHero = () => {
  return (
    <section
      className={`container text-pridarker mx-auto max-w-[1260px] flex flex-col lg:flex-row gap-12 `}
    >
      <div className="w-full lg:w-1/2 text-center lg:text-start">
        <h1 className="text-6xl mb-5 mt-4 font-slim">Our Story</h1>
        <p className="text-lg mb-24 w-full lg:w-3/4 font-inter">
          We’re an absolute leader in the Saudi cuisine-themed restaurants.{" "}
        </p>
        <div className="flex gap-12 ">
          <img src="../../images/Image 2.5.png" alt="" className="mt-8" />
          <img src="../../images/Image 2.png" alt="" className="mb-8" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 text-lg text-center lg:text-start font-inter mt-16 lg:mt-0 ">
        <h2 className="text-white text-4xl lg:text-2xl font-slim  my-16 tracking-tight w-full lg:w-[450px]">
          One of the best resturants in Saudi Arabia.
        </h2>
        <p className="leading-[1.2] w-full lg:w-[400px] mb-8">
          Your one direction to high-quality Saudi feasts, since 1998 we
          served in Saudi Arabia.
        </p>
        <p className="leading-[1.1] w-full lg:w-[400px] mb-11">
          Locals who are proud of the country and want to introduce it to
          visitors from around the world.
        </p>
        <p className="leading-[1.1] w-full lg:w-[400px] mb-8">
          We are perfectly positioned to provide our guests with an
          extraordinary health experience unlike any they’ve ever tasted. We
          can confidently claim that our menu is unlike anything else offered
          in the industry.{" "}
        </p>
        <p className="leading-[1.1] w-full lg:w-[400px] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          finibus mauris nec tincidunt varius. Ut sagittis, lorem at bibendum
          ornare, mauris neque venenatis justo, ut gravida mi neque eu lorem.
          Vestibulum auctor leo sit amet vulputate mollis. Curabitur ac lorem
          felis. Morbi ullamcorper maximus lorem.
        </p>
      </div>
    </section>
  )
}

export default AboutHero