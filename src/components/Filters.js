import React from 'react'
import Search from './Search'

const Filters = () => {
  return (
    <div className='w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative'>
        <Search/>
        <div>Currency</div>
        <div>Sort</div>
    </div>
  )
}

export default Filters