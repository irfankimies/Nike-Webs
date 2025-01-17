import React from 'react'
import { products } from '../constant';
import PopularProductsCard from '../component/PopularProductsCard';

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold text-text">
          Our <span className="text-coral-red">Popular</span>{" "}
          <span className="text-text">Products</span>
        </h2>
        <p className="max-w-lg font-montserrat text-p-color">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {products.map((product) => (
            <PopularProductsCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts