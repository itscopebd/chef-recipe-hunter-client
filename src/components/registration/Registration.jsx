import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-96">

                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="text" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                        <div>
                            <p className='text-red-500'>You have an account? <Link to="/login"><button className="btn btn-link">Login </button></Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;