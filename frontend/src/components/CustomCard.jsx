import React from 'react'

const CustomCard = ({children}) => {
  return (
    <div className='px-4 py-2 shadow-md rounded-lg min-w-full md:min-w-[500px] '  >
        {children}
    </div>
  )
}

export default CustomCard