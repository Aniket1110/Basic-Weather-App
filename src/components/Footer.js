import React from 'react'
import Mysvg from '../wave.svg'

const backgroundStyle = {
    backgroundImage: `url(${Mysvg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  };

const Footer = () => {
    return (
        <div className ="bg-dark" style={backgroundStyle}> </div>
    )
}

export default Footer
