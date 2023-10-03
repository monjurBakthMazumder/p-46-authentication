import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import useAuth from '../../../Hock/useAuth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Social = () => {
    const {loginWithGoogle, loginWithGithub} = useAuth()
    const navigate = useNavigate()
    

    const handleSocialLogin = social =>{
        social()
        .then(result=> {
            console.log(result.user);
            toast.success('login successful', {
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
            console.error(error);
        })
    }
    return (
        <div className="flex justify-center items-center gap-8 flex-wrap">
            <button className="text-3xl " onClick={()=> handleSocialLogin(loginWithGoogle)}><FcGoogle/></button>
            <button className="text-3xl " onClick={()=> handleSocialLogin(loginWithGithub)}><AiFillGithub/></button>
            <ToastContainer />
        </div>
    );
};

export default Social;