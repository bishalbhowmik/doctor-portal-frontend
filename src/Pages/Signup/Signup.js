import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';



const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }
  

    const [signupError, setSignupError] = useState();
   

    const { createUser,signUpWithGoogle,updateUser } = useContext(AuthContext);

    const handleSignup = data => {
        console.log(data);

        setSignupError('');


        createUser(data.email, data.password)
            .then(result => {
                const userInfo = {
                    displayName: data.name
                }
                const user = result.user;
               toast('User Created successfully');
                console.log(user);
                updateUser(userInfo)
                    .then(() => {
                      saveUser(data.name,data.email)
                     })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.error(error.message);
                setSignupError(error.message);
            });
    };

    const signUpgoogle = () =>{
        signUpWithGoogle();
    }


    const saveUser = (name,email) =>{
        const user = {name,email};
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
           body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {

            setCreatedUserEmail(email);
            console.log(data);

        });    
    }

  



    return (

        <div className='flex flex-col items-center justify-center h-[100vh]'>
            <div className='shadow-lg p-10 rounded w-[500px]'>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <h2 className='text-black text-center text-3xl'>Sign Up</h2>


                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: "This field is required"
                        })} name="name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-gray-500'>{errors.name?.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: "This field is required"
                        })} name="email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-gray-500'>{errors.email?.message}</p>}
                    </div>


                    <div className='mb-4'>

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "This field is required",
                            minLength: { value: 6, message: 'Password must be 6 character long' },
                            pattern: { value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])./, message: 'Password should be strong' }
                        })} name="password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-gray-500'>{errors.password?.message}</p>}

                    </div>
                    <div className='text-red-600'>
                        {signupError}
                    </div>

                    <button className='btn btn-accent w-full text-white'>SignUp</button>

                    <h3 className='text-sm mt-4 w-[90%] text-center'>Already have an account? <Link to='/login' className='text-secondary'>Please Log In</Link></h3>

                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>
                    </div>

                </form>
                <button onClick={signUpgoogle} className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Signup;