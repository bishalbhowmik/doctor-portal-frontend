import React from 'react';
import clock from '../../../../assets/icons/clock.svg';

const InfoCard = ({card}) => {
    const {img,title,description,bgColor} = card;
    return (
        <div className={`card md:card-side shadow-xl p-6 text-white ${bgColor}`}>
            <figure>
                <img  src={img} alt="image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;