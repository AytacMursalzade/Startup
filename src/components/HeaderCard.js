import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';

function HeaderCard() {
  const {modal} = useSelector( state => state.modal)


  return (
    <div>
      <Card />
      {modal && <Card />}
    </div>
  )
}

export default HeaderCard
