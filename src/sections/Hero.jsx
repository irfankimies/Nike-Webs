import React, { useState } from 'react'
import { bigShoe1 } from '../assets/images'
import Button from '../component/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constant';
import ShoeCard from '../component/ShoeCard';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);


  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center min-h-screen xl:flex-row gap-10 max-container"
    >
      {/* text section */}
      <div className="relative flex flex-col justify-center w-full max-xl:padding-x xl:w-2/5 pt-28  items-start bg-bg">
        <p className="text-xl font-montserrat text-text">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-nowrap relative text-text">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 mr-5">Nike</span>
          <span className="text-text">Shoes</span>
        </h1>
        <p className="font-montserrat text-p-color text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold text-text">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-p-color">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* image section */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe1"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero