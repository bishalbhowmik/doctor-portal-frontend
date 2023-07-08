import React from 'react';

const AppointmentOption = ({ option,setTreatment }) => {

    const { name, slots } = option;

    return (
        <div className="card bg-base-100 shadow-xl text-center">
            <div className="card-body">
                
                <h2 className="text-xl font-semibold text-secondary">{name}</h2>
                <p className='text-sm'>{slots[0]}</p>
                <p className='text-sm'>{slots.length} {slots.length > 1 ? 'slots' : 'slot'} Available</p>
                <div className="mt-5">
                <label onClick={()=>setTreatment(option)} htmlFor="my-modal-4" className="btn bg-primary text-white">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;