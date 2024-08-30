import React from 'react'
import ImageLoader from './ImageLoader'

const StaffProfileCard = ({src,name,title}) => {
  return (
    <div className='staff-card'>
    <ImageLoader src={src} height="300px" />
        <span className='name'>{name}</span>
        <span className='title'>{title}</span>
    </div>
  )
}

export default StaffProfileCard