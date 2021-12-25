import React from 'react'
import Mysvg from '../wave.svg'

const backgroundStyle = {
    backgroundImage: `url(${Mysvg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
    width: '100vw'
  };

const Footer = () => {
    return (
        <div style={backgroundStyle}> </div>
    )
}

export default Footer
