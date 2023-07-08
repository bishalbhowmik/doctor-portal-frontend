import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectDate}) => {
    return (
        <div className='text-center text-secondary text-lg font-semibold'>
            <p>Available appointment is :{format(selectDate,'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;