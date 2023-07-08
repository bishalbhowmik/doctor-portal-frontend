import React from 'react';
import chair from '../../../assets/images/chair.png';
import Button from '../../../components/Button/Button';
import bg from '../../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className="hero"
        style={{
            backgroundImage: `url(${bg})`
        }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-1/2 rounded-lg shadow-2xl' src={chair}  alt='chair'/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button>Click to Start</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;