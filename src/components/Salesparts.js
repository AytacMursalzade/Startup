import React from 'react'
import SalesPoster from './SalesPoster'
import SalesPart from './SalesPart'

function Salesparts() {
  return (
    <div className='flex justify-between px-[75px] py-[99px] '>
      <SalesPoster />
      <SalesPart />
    </div>
  )
}

export default Salesparts
