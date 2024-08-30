import React from 'react'
import ImageLoader from './ImageLoader'

const NoItemPlaceholder = ({src,title,subtitle,callBackAction,btnTitle}) => {
  return (
    <div className='no-item-container'>
    <ImageLoader src={src} width="250px"/>
    <p className='title'>{title}</p>
    <p className='subtitle text-muted'>{subtitle}</p>
    {callBackAction &&
    <button className='btn btn-primary' onClick={() => callBackAction()}>{btnTitle}</button>
    }
    </div>
  )
}

export default NoItemPlaceholder