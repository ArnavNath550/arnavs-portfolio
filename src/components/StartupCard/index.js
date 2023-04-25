import React from 'react'
import './startupCard.css'

const StartupCard = ({data}) => {
  return (
    <div className="startup-card">
        <div className="startup-card-heading">
            {data.name}
        </div>
        <div className="startup-card-date-range">
            {data.date}
        </div>
        <div className="startup-card-profession">
            {data.profession}
        </div>
        <div className="startup-card-link">
            {data.link ? <><a className="startup-card-link-btn" href="https://www.zeemaa.in/">{data.link}</a><small>mobile-only</small></> : <></>}
        </div>
    </div>
  )
}

export default StartupCard