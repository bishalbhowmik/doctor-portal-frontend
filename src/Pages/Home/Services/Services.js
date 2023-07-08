import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import flouride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const cards = [
        {
            id: 1,
            img: flouride,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            img: cavity,
            title: 'Cavity Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            img: whitening,
            title: 'Whitening Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (

        <div className='mt-10'>

            <div className='text-center mb-6'>
                <h1 className='text-[#19D3AE] text-xl font-semibold uppercase'>Our Services</h1>
                <p className='text-black text-3xl font-light'>Services we provide</p>
            </div>

            <div className='grid gap-y-5 gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    cards.map(card => <Service
                        key={card.id}
                        card={card}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;