import React from 'react'

const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 max-w-[1400px] text-white flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col justify-between items-center lg:items-start gap-16 lg:gap-20">
        <div className="h-auto lg:h-[225px] text-center lg:text-start relative">
          <h1 className="mt-12 min-w-full lg:min-w-[980px] text-[70px] lg:text-[110px] tracking-tight leading-[1.2] bg-[rgba(92,0,23,0.7)] static lg:absolute z-10" 
          // data-aos="fade-up" data-aos-delay="500"
          >
            Taste the authentic Saudi cuisine
          </h1>
        </div>
        <div className='flex flex-col items-center lg:items-start'>
          <p className="w-[450px] text-2xl text-center lg:text-start font-light mt-4 mb-16"
           
          //  data-aos="fade-right" data-aos-delay="1200" data-aos-duration="500"
          >
            Among the best Saudi chefs in the world, serving you something
            beyond flavor
          </p>
          {/* <OutlineButton border="secdarker" bg="pridarker">
            Our Menu
          </OutlineButton> */}
          <a href="/" className={`cursor-pointer border-4 border-secdarker hover:border-pridarker  
          bg-pridarker hover:bg-secdarker font-slim text-2xl lg:text-xl text-secdarker hover:text-pridarker transition-all duration-300 ease-in-out py-5 px-9 w-full lg:w-auto text-center`} 
          // data-aos="fade-right" data-aos-delay="1600" data-aos-duration="500"
          >
            {'Our Menu'}
          </a>
          <img
            src="../../images/Vector.png"
            alt=""
            className="mt-20 lg:mt-36"
          />
        </div>
      </div>
      <div className='mt-16 lg:mt-0'>
        <img src="../../images/image 1.png" alt="" data-aos="zoom-in"  />
      </div>
    </section>
  )
}

export default HeroSection