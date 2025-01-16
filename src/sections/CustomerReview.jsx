import React from 'react'
import { reviews } from '../constant';
import ReviewCard from '../component/ReviewCard';

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold text-text">
        What Our
        <span className="text-coral-red"> Customers </span> Says?
      </h3>
      <p className="info-text m-auto max-w-lg text-center mt-4">
        Hear genuine reviews from our satisfied customers about their
        exceptional experience.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((item) => (
          <ReviewCard
            key={item.customerName}
            imgURL={item.imgURL}
            customerName={item.customerName}
            rating={item.rating}
            feedback={item.feedback}
          />
        ))}
      </div>
    </section>
  );
}

export default CustomerReview