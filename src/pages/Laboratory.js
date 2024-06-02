import React from 'react'
import LaboratoryHead from '../components/LaboratoryHead'
import LabSlider from '../components/LabSlider'
import LabItemOne from '../components/LabItemOne'
import LabItemTwo from '../components/LabItemTwo'
import LabaratorySlide from '../components/LabaratorySlide'
import LabSalesOne from '../components/LabSalesOne'
import LabSalesTwo from '../components/LabSalesTwo'
import LabSalesThree from '../components/LabSalesThree'
import LabFinish from '../components/LabFinish'
import FooterAverage from '../components/FooterAverage'
import LabFooter from '../components/LabFooter'

function Laboratory() {
  return (
    <div>
      <LaboratoryHead />
      <LabSlider />
      <LabItemOne />
      <LabItemTwo />
      <LabaratorySlide />
      <LabSalesOne />
      <LabSalesThree />
      <LabSalesTwo />
      <LabFinish />
      <FooterAverage display2={false} />
      <LabFooter />
    </div>
  )
}

export default Laboratory
