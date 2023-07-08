import React from 'react';
import Button from '../../../components/Button/Button';
import appointment from '../../../assets/images/appointment.png';

const ConnectUs = () => {
    return (
        <section 
        className='mt-20 text-center p-10'
        style={{
            backgroundImage:`url(${appointment})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}
        >
            <h3 className='text-lg font-bold text-secondary mt-16'>Contact Us</h3>
            <h1 className='text-5xl text-white font-light mb-12'>Stay connected with us</h1>
            <form action="">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs md:max-w-md mb-3" /> <br />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs md:max-w-md mb-3" /><br />
                <textarea className="textarea textarea-bordered w-full max-w-xs md:max-w-md mb-3" placeholder="Your Message"></textarea><br />

                <button type="submit" className='btn bg-secondary text-white'>Submit</button>
            </form>
        </section>
    );
};

export default ConnectUs;