import React from 'react'

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  hoverBackgroundColor,
  hoverTextColor,
  hoverBorderColor,
}) => {
  return (
    <div className={`flex justify-center items-center gap-2 px-7 py-4 border
       text-lg leading-none rounded-full font-montserrat duration-500 cursor-pointer  active:opacity-50
       ${backgroundColor ? `${borderColor} ${textColor}`
        : 'bg-coral-red border-coral-red text-white'
       }
       ${hoverBackgroundColor ? `${hoverBackgroundColor}`
        : "hover:bg-purple-500"
       }
       ${hoverTextColor ? `${hoverTextColor}` : "hover:text-white"}
       ${hoverBorderColor ? `${hoverBorderColor}` : "hover:border-purple-500"}
       `}

    >
      {label}
      {iconURL && (
        <img 
          src={iconURL}
          alt="arrow-left"
          className='ml-2 rounded-full w-5 h-5'
          />
      )}
    </div>
  )
}

export default Button