import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import phone from '../../../../assets/icons/phone.svg';
import marker from '../../../../assets/icons/marker.svg';
import InfoCard from './InfoCard';


const InfoCards = () => {

    const cards = [
        {
            id:1,
            img: clock,
            title: 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            bgColor: 'bg-gradient-to-r from-primary to-secondary'  
        },
        {
            id:2,
            img: marker,
            title: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            bgColor: 'bg-gradient-to-r from-accent to-neutral',
        },
        {
            id:3,
            img: phone,
            title: 'Contact us now',
            description: '+000 123 456789',
            bgColor: 'bg-gradient-to-r from-secondary to-primary',
        }
    ]

    return (
        <div className='grid gap-6 gap-y-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-100 my-6'>
            {
                cards.map(card => <InfoCard
                key= {card.id}
                card ={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;