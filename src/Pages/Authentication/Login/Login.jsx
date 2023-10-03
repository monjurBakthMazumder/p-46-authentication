import { useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Social from "../Social/Social";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hock/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [showPassword, setShowPasswords] = useState()
    const {loginUser, resetPassword} = useAuth()
    const emailRef = useRef()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        // login user
        loginUser(email, password)
        .then(result=> {
            console.log(result.user);
            navigate('/')
            toast.success('You have applied successfully', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
        .catch(error=> {
            console.error(error)
        })
        console.log(email, password);
    }
    const handleForgetPasswords = () => {
        const email = emailRef.current.value
        console.log(email);
        if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            return alert("please enter valid email")
        }
        resetPassword(email)
        .then(()=>{
            toast.success('check email and set new password', {
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
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-[80vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <Social/>
                    <div className="divider mb-0">OR</div>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            ref={emailRef}
                            required 
                            placeholder="Email" 
                            className="input input-bordered" />
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
                        <label className="label">
                            <a 
                                onClick={handleForgetPasswords}
                                href="#" 
                                className="label-text-alt link link-hover"
                            >Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center text-xs font-semibold mt-5">New here? please <Link to={'/registration'} className="text-blue-700 underline cursor-pointer">Registration</Link></p>
                </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;