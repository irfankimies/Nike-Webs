import React from 'react'
import { offer } from '../assets/images'
import Button from '../component/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-start max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col items-start">
        <h2 className="text-text mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Get the best deals on your favorite shoes. Limited time offer. The
          most comfortable shoes at the best price. Don't miss out on this
          amazing opportunity with limited stock available.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm to fulfill your unique style and comfort needs. Your
          journey to the perfect shoe starts here.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor={"bg-white"}
            borderColor="border-slate-gray"
            textColor={"text-slate-gray"}
            hoverBackgroundColor={"hover:bg-slate-gray"}
            hoverTextColor={"hover:text-white"}
            hoverBorderColor={"hover:border-slate-gray"}
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer