import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hock/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const { user, logOut} = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
        .then(() => {
            toast.success('logout successful', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            navigate('/')
        })
        .catch(error=> {
            console.error(error)
        })
    }
    const links =
    <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to={'/applied'}>Applied Jobs</NavLink></li>
                <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
            </>
        }
        {
            user 
            ?
            <li><a onClick={handleLogout}>Logout</a></li>
            :
            <li><NavLink to={'/login'}>Login</NavLink></li>
        }
    </>
    return (
        <nav className="navbar bg-base-100 border-b-2 sticky z-50 px-[5%] sm:px-[10%]">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl sm:text-2xl lg:text-3xl font-bold">CareerHub</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={user?.photoURL} className="bg-gray-600"/>
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
            </div>
            <ToastContainer />
        </nav>
    );
};

export default Header;