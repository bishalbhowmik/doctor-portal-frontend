import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import AppointmentOptions from './AppointmentOptions/AppointmentOptions';

const AppointmentPage = () => {
    const [selectDate, setSelectDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
            selectDate={selectDate}
            setSelectDate={setSelectDate}
            ></AppointmentBanner>

            <AvailableAppointment
            selectDate={selectDate}
            ></AvailableAppointment>

        <AppointmentOptions
        selectDate={selectDate}
        ></AppointmentOptions>
            
        </div>
    );
};

export default AppointmentPage;