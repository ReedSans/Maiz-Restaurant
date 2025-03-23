import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-secdarker'>
      <div className=' pt-[54px] pb-[100px] flex flex-col items-center'>

      <div><img src="../../images/footer-logo.png" alt="" /></div>
      <ul className='mt-[60px] flex flex-col lg:flex-row gap-3 lg:gap-8 text-xl text-center lg:text-start font-regular font-inter text-pridarker'>
        <li className=''><a href="/">Home</a></li>
        <li className=''><a href="/about">About</a></li>
        <li className=''><a href="/menu">Menu</a></li>
        <li className=''><a href="/venue">Venue</a></li>
        <li className=''><a href="/events">Events</a></li>
        <li className=''><a href="/contact">Contact us</a></li>
      </ul>
      </div>
      <div className='py-[22px] px-[150px] border-t border-accent'>
        <div className='flex flex-col-reverse gap-10 lg-gap-0 lg:flex-row max-w-2xl justify-between text-accent font-pop'>
          <span className='self-center lg:self-start'>&copy; 2021 | All Rights Reserved</span>
          <div className='icon-box justify-self-center flex justify-between '>
            <FaFacebook className='mx-3'/>
            <FaTwitter className='mx-3'/>
            <FaInstagram className='mx-3'/>
            <FaLinkedin className='mx-3'/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer