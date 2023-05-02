import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const LogIn = () => {

    const [success, setSucess] = useState("");
    const [error, setError] = useState("")

    const { user, loginWithGoogle, loginWithGithub, logInwithEmailPassword } = useContext(AuthContext)
    const navigate = useNavigate();

    // login google 
    const handleLoginWithGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        loginWithGoogle(googleProvider)
            .then(result => {
                console.log(result.user)
            }).catch(error => {
                console.log(error)
            })
    }


    // login with github 
    const handleLoginWithGithub = () => {
        const githubProvider = new GithubAuthProvider();
        loginWithGithub(githubProvider)
            .then(result => {
                console.log(result.user)
            }).catch(error => {
                console.log(error)
            })
    }

    // logIn with email password 

    const handleLogInWithEmailPassword = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInwithEmailPassword(email, password)
            .then(result => {
                setError("")
                navigate("/")
            }).catch(error => {
                setSucess("")
                setError("Email or Password Not Match!!")
            })
    }


    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="w-96">

                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogInWithEmailPassword}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            success &&
                            <div className="form-control mt-6">
                                <p className="text-1xl text-green-500">{success}</p>
                            </div>
                        }
                        {
                            error &&
                            <div className="form-control mt-6">
                                <p className="text-2xl text-red-500">{error}</p>
                            </div>
                        }
                        <div className="mt-6 text-center">
                            <button className="btn btn-secondary mr-2" onClick={handleLoginWithGoogle}>  <FaGoogle className='text-3xl mr-2'></FaGoogle> Google </button>
                            <button className="btn btn-secondary ms-2" onClick={handleLoginWithGithub}> <FaGithub className='text-3xl mr-2'></FaGithub> Github</button>
                        </div>
                        <div>
                            <p className='text-red-500'>Don't have an account? <Link to="/registration "><button className="btn btn-link">Registration </button></Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LogIn;