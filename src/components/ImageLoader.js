import React,{useState} from 'react'
import placeholder from '../assets/images/placeholder2.png'

const ImageLoader = ({width,height,src}) => {
  
  const [imgSrc, setImgSrc] = useState(src);

  const handleImageLoad = () => {
    setImgSrc(src)
  };

  const handleImageError = () => {
    setImgSrc(placeholder);
    console.log('Imae failed')
  };



  return (
    <img src={imgSrc} width={width} alt="Image" height={height}
     onLoad={handleImageLoad}
      onError={handleImageError}
  
      />
  )
}

export default ImageLoader