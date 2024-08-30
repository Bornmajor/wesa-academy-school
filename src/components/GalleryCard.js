import React from 'react'
import Card from 'react-bootstrap/Card';

const GalleryCard = ({src}) => {
  return (
    <div className="gallery-card" onClick={() => console.log('Enlarge pic')} >
 
    <img src={src} />
    </div>

  )
}

export default GalleryCard