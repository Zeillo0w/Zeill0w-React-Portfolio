import React from 'react'
import './CTFCard.css'

const CTFCard = ({ details}) => {
  return (
    <div className="CTF-card">
        <h6>{details.title}</h6>

        <div className="CTF-duration">{details.date}</div>
        <div className='CTF-Cards'>
        <img className="img"src={details.imageUrl} alt={details.title} />
        </div>
        <ul>
            {details.description.map((item) => (
                <li key={item}>{item}</li>
            ))}
            
        </ul>
    </div>
  )
}

export default CTFCard