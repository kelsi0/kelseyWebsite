import React from 'react';

const TimelineItem = ({ image, date, item, description }) => {
    return (
        <li>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={image} alt="" /></div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>{date}</h4>
                    <h4 className="subheading">{item}</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">{description}</p></div>
            </div>
        </li>
    );
}

export default TimelineItem;