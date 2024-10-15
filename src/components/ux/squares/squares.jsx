import React from 'react'
import './squares.scss'
const Squares = ({letter, color, action}) => {
  return (
    <div onClick={action} className='squaresWrapper' color-bg={color}><p>{letter}</p></div>
  )
}

export default Squares