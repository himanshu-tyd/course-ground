import React from 'react'

const WrapperContainer = ({children, containerClass}) => {
  return (
    <div className={`px-8 sm:px-10 md:px-20 py-3 sm:  w-full  overflow-x-hidden ${containerClass} `}  >
        {children}
    </div>
  )
}

export default WrapperContainer