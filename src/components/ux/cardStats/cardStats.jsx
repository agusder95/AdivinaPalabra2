import React from 'react'
import './cardStats.scss'

const CardStats = ({category, record, score}) => {
  return (
    <div className='cardStatsWrapper' >
        <h3>{category}</h3>
        <p>Record: {record}</p>
        <p>Puntaje: {score}</p>
    </div>
  )
}

export default CardStats