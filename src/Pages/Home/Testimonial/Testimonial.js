import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import img1 from '../../../assets/images/people1.png';
import img2 from '../../../assets/images/people2.png';
import img3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const testimonials =[
        {
            _id:1,
            img: img1,
            title: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Wilson Henry',
            location:'California'
        },
        {
            _id:2,
            img: img2,
            title: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Wilson Henry',
            location:'California'
        },
        {
            _id:3,
            img: img3,
            title: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name:'Wilson Henry',
            location:'California'
        }
    ]
    return (

        <div>
            <div className="hero flex flex-row-reverse justify-between">

                <div>
                    <img src={quote} className="w-[76px] lg:w-[192px] rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h3 className="text-xl text-secondary font-bold">Testmonial</h3>
                    <h1 className="py-2 text-2xl">What Our Patients Says</h1>
                </div>
            </div>

            <div className='my-10 grid gap-4 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    testimonials.map(testimonial=> <Review
                        key={testimonial._id}
                        testimonial ={testimonial}
                    ></Review>)
                }
            </div>
        </div>

    );
};

export default Testimonial;