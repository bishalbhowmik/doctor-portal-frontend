import React, { useState } from 'react';
import chair from '../../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectDate,setSelectDate}) => {
    

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                    mode ="single"
                    selected ={selectDate}
                    onSelect={setSelectDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;