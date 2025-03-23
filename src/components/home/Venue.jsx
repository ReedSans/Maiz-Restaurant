import React from 'react'
import { RaisedButton } from '../Buttons'

const Venue = () => {
  return (
    <section className="mt-24 px-6 py-24 text-white  relative">
      <img src="../../images/Rectangle.png" alt="" className="hidden lg:inline-block absolute top-0 right-0"/>

      <div className="container mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-3 gap-y-0 lg:gap-5">
        <div className='mx-auto'>
          <img src="../../images/image 3.png" alt="" className='h-3/4' />
        </div>
        <div className="mx-auto text-center lg:text-start lg:col-span-2">
          <h2 className="text-5xl  leading-[1.2] lg:leading-[1.5] w-auto mb-16 lg:mb-8">
            A distinctive dining destination inspired by the culture.
          </h2>
          <p className="mb-28 text-2xl font-light">
            Experience Al Balad old town of Jeddah vibes.
          </p>
          <RaisedButton >Our Venue</RaisedButton>
          <div className="mt-20 mb-8 flex gap-4 lg:gap-8 w-full lg:w-36 h-36">
            <img src="../../images/image 4.png" alt="" className="mr-0 lg:mr-5 w-3/5 lg:w-full h-full " />
            <img src="../../images/image 5.png" alt="" className="mr-0 lg:mr-5 w-3/5 lg:w-full h-full " />
            <img src="../../images/image 6.png" alt="" className="mr-0 lg:mr-5 w-3/5 lg:w-full h-full " />
          </div>
          <hr className="bg-secdarker border border-secdarker w-full lg:w-1/2" />
        </div>
      </div>
    </section>
  )
}

export default Venue