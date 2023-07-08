import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment,setTreatment, selectDate,refetch }) => {

    const date = format(selectDate, 'PP');

    const { name,slots } = treatment;

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;

        const treatmentName = name;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const formData ={
            appointmentDate:date,
            treatmentName,
            selectedTime: slot,
            patientName,
            phone,
            email
        }
        

        fetch('http://localhost:5000/bookings',
            {
                method:'POST',
                
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(formData)

            })
            .then(res =>res.json())
            .then(data =>{
               if(data.acknowledged){
                console.log(data)
                toast.success('Booking Confirm')
                setTreatment(null);
                refetch();
               }
               else{
                toast.error(data.message);
               }
                
            })

        console.log(formData);
       

    }

    const {user} = useContext(AuthContext);

   
    return (
        <>


            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer text-center">
                <label className="modal-box relative" htmlFor="my-modal-4">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleForm}>
                        <input type="text" disabled value={date} className="input input-bordered w-full max-w-sm my-3" />
                        <select name="slot" className="select select-bordered w-full max-w-sm">
                           {
                            slots.map((slot,i)=><option
                            key={i}
                            value={slot}>{slot}</option>)
                           }
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered w-full max-w-sm my-3" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-sm" />
                        <input name="email" type="text" defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full max-w-sm my-3" />
                        <input type="submit" value="Submit" className='btn bg-accent w-full max-w-sm' />
                    </form>
                </label>
            </label>

        </>
    );
};

export default BookingModal;