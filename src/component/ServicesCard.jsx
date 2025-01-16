import React from 'react'

const ServicesCard = ({ imgURL, label, subtext }) => {
  return (
    <section className='sm:min-w-[350px] w-full rounded-[20px] shadow-coral-red px-10 py-16 sm:w-[350px] '>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>

      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold text-text'> 
        {label}
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal info-text'>
        {subtext}
      </p>
    </section>
  )
}

export default ServicesCard