import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Social from "../Social/Social";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hock/useAuth";
import {  sendEmailVerification, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registration = () => {
    const [showPassword, setShowPasswords] = useState()
    const navigate = useNavigate()
    const {createUser} = useAuth()
    const handleRegistration = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        // create user
        createUser(email , password)
        .then(result=>{
            console.log(result);
            sendEmailVerification(result.user)
            .then(()=>{
                toast.success('check email and verified it', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })
            updateProfile(result.user, {
                displayName: name, 
                photoURL: result.user.photoURL
            })
            navigate('/')
        })
        .catch(error=> {
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-[80vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Registration now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <Social/>
                    <div className="divider mb-0">OR</div>
                    <form onSubmit={handleRegistration}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" required placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" required placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input 
                                type={ showPassword ? "text" : "password" }
                                name="password" 
                                required 
                                placeholder="Password" 
                                className="input input-bordered w-full pr-8" />
                            <span 
                                onClick={()=> setShowPasswords(!showPassword)}
                                className="absolute -ml-7 mt-3 text-2xl cursor-pointer"
                            >{ showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}</span>
                        </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Registration</button>
                        </div>
                    </form>
                    <p className="text-center text-xs font-semibold mt-5">Already have account? please <Link to={'/login'} className="text-blue-700 underline cursor-pointer">Login</Link></p>
                </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;