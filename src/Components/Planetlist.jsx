import React, { useState } from 'react'
import Planetmodal from './Planetmodal'
import { Link } from 'react-router-dom'

export default function Planetlist() {
    const [openModal, setOpenModal] =useState(false)
  return (
    <div className='Planet-list'>      
            <Planetmodal />
            <p>Venus</p>
            <p>Earth</p>
            <p>Mars</p>
            <p>Jupiter</p>
            <p>Saturn</p>
            <p>Uranus</p>
            <p>Neptune</p>
          </div>
  )
}
