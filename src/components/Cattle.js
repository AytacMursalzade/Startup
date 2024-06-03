import React from 'react'
import imageCattle from "../assets/Cattle.png"

function Cattle() {

  const imageTitle = {
    backgroundImage: `url(${imageCattle})`,
    backgroundPosition:"center",
    backgroundSize:"cover"
  }
  return (
    <div style={imageTitle} className='w-[100%] h-[500px] '>
     
    </div>
  )
}

export default Cattle
