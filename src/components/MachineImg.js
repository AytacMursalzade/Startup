import React from 'react'

function MachineImg({imgMachineVideo}) {

    const bgVideo = {
        backgroundImage: `url(${imgMachineVideo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };


  return (
    <div style={bgVideo} className='w-[100%] h-[600px] max-600:w-[500px] max-600:h-[531px] '>
      {/* <video>
        <source src='' />
      </video> */}
    </div>
  )
}

export default MachineImg
