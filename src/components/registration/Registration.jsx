import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';

const Registration = () => {
    const [passwordError, setPasswordError] = useState("");
    const [password, setPassword] = useState();
    const [success, setSucess] = useState("")
    const { registrationUser } = useContext(AuthContext);

    // registration value recive 
    const handleUserRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo_url = form.photo_url.value;
        if (password.length < 6) {
            event.target.focus();
            return;
        }
        else {
            registrationUser(email, password)
                .then(result => {
                    setSucess("Registration Seccessful")
                }).catch(error => {
                    setSucess("Registration Faild");
                    console.log(error.message)
                })
        }
    }


    // validation password field  

    const handlePassword = (e) => {
        const password = e.target.value;
        setPasswordError("")
        if (password.length < 6) {
            setPasswordError("Please set password more than 6 charecter")
            return;
        }
        else {
            setPassword(password)
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-96">

                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUserRegistration}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="text" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" value={password} onChange={handlePassword} className="input input-bordered" name='password' required />
                                {passwordError && <label className="label">
                                    <span className="label-text text-red-600">{passwordError}</span>
                                </label>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" placeholder="Photo URL" className="input input-bordered" name='photo_url' required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                            {
                                success && 
                                <div className="form-control mt-6">
                                <p className="text-2xl text-green-500">{success}</p>
                            </div>
                            }
                            <div>
                                <p className='text-red-500'>You have an account? <Link to="/login"><button className="btn btn-link">Login </button></Link> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;