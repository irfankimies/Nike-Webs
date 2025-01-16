import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constant';
import { copyrightSign } from '../assets/icons';

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        {/* logo section */}
        <div className="flex flex-col gap-10 items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in Store. Get Reward
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((item) => (
              <div className='flex justify-center items-center bg-white w-12 h-12 rounded-full hover:opacity-80 active:opacity-40'>
                <img src={item.src} alt="logo-item" height={24} width={24} />
              </div>
            ))}
          </div>
        </div>

        {/* descrition section */}
        <div className='flex justify-between flex-1 gap-20 lg:gap-10 flex-wrap'>
          {footerLinks.map((item) => (
            <div key={item.title}>
              <h4 className='text-white-400 font-palanquin text-3xl font-bold'>
                {item.title}
              </h4>
              <ul>
                {item.links.map((item) => (
                  <li className='text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray mt-3'>
                    <a href={item.link}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between mt-24 max-sm:flex-col max-sm:items-center text-white-400'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt="copyright" width={20} height={20} className='rounded-full m-0' />
          <p>Copyright. All right reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>

    </footer>
  );
}

export default Footer