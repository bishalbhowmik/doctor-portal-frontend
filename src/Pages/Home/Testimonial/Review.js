import React from 'react';

const Review = ({ testimonial }) => {

    const { title, img, name, location } = testimonial;

    return (
        <section>
            <div className="card  text-primary-content shadow-2xl">
                <div className="card-body">
                    <p className="text-sm mb-6">{title}</p>

                    <div className="card-actions">
                        <div className="avatar mr-3">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-lg'>{name}</h3>
                            <p className='text-sm'>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;