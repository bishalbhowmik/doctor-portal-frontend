import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import { useQuery } from 'react-query';

const MyDashboard = () => {

    const { user } = useContext(AuthContext);
    

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers:{
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                },
            })
            const data = await res.json()
        
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl mb-4 flex justify-center items-center'>My Appointment</h3>


            <div className="overflow-x-auto">
                <table className="table mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Treatment Name</th>
                            <th>Selected Time</th>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) =>
                                <tr className="hover">
                                    <td>{i+1}</td>
                                    <td>{booking.treatmentName}</td>
                                    <td>{booking.selectedTime}</td>
                                    <td>{booking.patientName}</td>
                                    <td>{booking.phone}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDashboard;