import React from 'react'
import Button from '../component/Button'

const Subscribe = () => {
  return (
    <section 
      className='max-container flex justify-between items-center max-lg:flex-col gap-10' id='contact-us'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold text-text'>
        Sign Up Form
        <span className='text-coral-red'> Updates</span> & NewsLetter
      </h3>
      <div className='flex lg:max-w-[40%] w-full items-center max-sm:flex-col max-sm:items-center gap-5 p-2.5 sm:border-slate-gray
      rounded-full sm:border'>
        <input type='text' placeholder='subscibe@nike.com'  className='input bg-bg text-text'/>
        <div className='flex max-sm:justify-center items-center max-sm:w-full'>
          <Button label={"Sign Up"}/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe