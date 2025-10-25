import React from 'react'
import AppSelectField from '../../form/AppSelectField'

const LeftSideFunction = () => {
  return (
    <div className='p-2 bg-amber-100 w-[60%]'>
        <div className='flex'>
            <AppSelectField />
            <AppSelectField />
            <AppSelectField />
            <AppSelectField />

        </div>
    </div>
  )
}

export default LeftSideFunction