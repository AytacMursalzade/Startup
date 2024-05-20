import React, {useState} from 'react'
import FooterTop from './FooterTop';

function HoverApp() {

  const [hovered,setHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };


  return (
    <div>
        <FooterTop onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} hovered={hovered} />
    </div>
  )
}

export default HoverApp
