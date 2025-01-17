import React from 'react'
import { star } from '../assets/icons'
import Button from './Button'

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full shadow-coral-red items-center max-w-[17rem]
      mx-auto'>
      <div className='flex flex-col items-center py-5 justify-center '>
        <img 
          src={imgURL} 
          alt={name} 
          className='px-5'
          />
          <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt="rating" width={24} height={24} />
            <p className='font-montserrat text-xl leading-none text-p-color'>
              4.5
            </p>
          </div>
          <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin items-start text-text'>
            {name}
          </h3>
          <p className='mt-2 font-semibold font-montserrat text-coral-red leading-normal text-2xl'>
            {price}
          </p>
          <div className='mt-4'>
            <Button label='Add to cart' />
          </div>
      </div>
    </div>
  )
}

export default PopularProductsCard