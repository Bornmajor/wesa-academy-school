import React from 'react'
import ImageLoader from './ImageLoader'
import appLogo from '../assets/images/wesa-pefa-brown.png'

const AppLoader = ({statusMsg}) => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
        <ImageLoader src={appLogo} width="150px" />
        <div style={{fontWeight:'600',margin:'10px'}}>{statusMsg}</div>
        <div className='loader'></div>
    </div>
  )
}

export default AppLoader