import React from 'react';
import { useQuery } from 'react-query';

const UserList = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method:'PUT',
            headers:{
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }




    return (
        <div className=''>
            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user,i) => <tr key={user._id} className="hover">

                                <td>{i+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button onClick={()=> handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Update</button></td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;