import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="w-96">
                    
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="mt-6 text-center">
                                <button className="btn btn-secondary mr-2">  <FaGoogle className='text-3xl mr-2'></FaGoogle> Google </button>
                                <button className="btn btn-secondary ms-2"> <FaGithub className='text-3xl mr-2'></FaGithub> Github</button>
                            </div>
                            <div>
                                <p className='text-red-500'>Don't have en account? <Link to="/registration "><button className="btn btn-link">Registration </button></Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;