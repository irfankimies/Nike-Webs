import React from 'react'
import { shoe8 } from '../assets/images';
import Button from '../component/Button';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
      {/* text section */}
      <div className="flex flex-1 flex-col items-start">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg text-text">
          We provide you
          <span className="text-coral-red ml-3">Super</span>
          <br />
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort, quality, and style, our shoes are designed
          to elevate your active lifestyle, experience, providing you with
          unmatched comfort and style.
        </p>
        <p className="info-text mt-4 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-6'>
        <Button label="View Details" />
        </div>
      </div>

      {/* image section */}
      <div className='flex-1 flex justify-center items-center'>
        <img 
          src={shoe8} 
          alt="shoe"
          width={570}
          height={522}
          className='object-contain' 
          />
      </div>
    </section>
  );
}

export default SuperQuality