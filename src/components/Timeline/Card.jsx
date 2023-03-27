import React, { useState } from 'react'

const Card = (props) => {
    const [showInfo,setShowInfo]=useState(false);
    
return (
    <div className="timeline-item">
        <div className="timeline-header" onClick={()=>{setShowInfo(!showInfo)}}>
            <h3 className="timeline-subtitle">{props.title}</h3>
            <span className="timeline-icon">{showInfo ? '-' : '+'}</span>
        </div>
        <div className={`${showInfo ? 'show-content' : ''} timeline-content`}>
            <div className="timeline-date-title">
                <h3 className="timeline-title">{props.subtitle}</h3>
                <span className="resume-date text-cs">{props.date}</span>
            </div>
            <p className="timeline-description">{props.description}</p>
        </div>
    </div>
)
}
export default Card