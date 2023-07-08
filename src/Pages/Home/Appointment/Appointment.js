import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import Button from '../../../components/Button/Button';

const Appointment = () => {
    return (
        <section
            className='mt-20'
            style={{
                backgroundImage: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='hidden md:block'>
                        <img src={doctor} className="max-w-sm -mt-24 rounded-lg shadow-2xl" />
                    </div>
                    <div className='md:w-1/2'>
                        <h3 className="text-xl font-bold text-secondary">Appointment!</h3>
                        <h1 className="py-6 text-4xl text-white">Make an appointment Today</h1>
                        <p className='text-white text-sm mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;