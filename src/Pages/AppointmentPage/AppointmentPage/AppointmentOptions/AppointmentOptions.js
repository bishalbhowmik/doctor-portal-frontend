import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import { format } from 'date-fns';
import Loading from '../../../Shared/Loading/Loading';

const AppointmentOptions = ({selectDate}) => {

    // const [appointmentOption, setAppointmentOption] = useState([]);

    const [treatment, setTreatment] = useState(null);
    const date = format(selectDate,'PP');

    // const {data:appointmentOption=[]} = useQuery({
    //     queryKey:['appointmentOptions'],
    //     queryFn: ()=> fetch('http://localhost:5000/appointmentOptions')
    //     .then(res =>res.json())
    // })

    const {data : appointmentOption=[],	refetch,isLoading} = useQuery({
        queryKey:('appointOptions', date),
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }

})

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOption(data))

    // }, [])

    if(isLoading){
        return <Loading></Loading>
    }


    return (

        <div className='grid gap-3 gap-y-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                appointmentOption.map(option => <AppointmentOption
                    key={option._id}
                    option={option}
                    setTreatment = {setTreatment}
                ></AppointmentOption>)
            }

          {
            treatment &&   <BookingModal
            treatment = {treatment}
            setTreatment={setTreatment}
            selectDate={selectDate}
            refetch ={refetch}

            ></BookingModal>
          }
        </div>
    );
};

export default AppointmentOptions;