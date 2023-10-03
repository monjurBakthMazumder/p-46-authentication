import useAuth from "../../Hock/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SendVerification = () => {
    const {sendUserEmailVerification} = useAuth()
    const handleSendUserEmailVerification = () => {
        sendUserEmailVerification()
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

    }
    return (
        <div className="flex flex-col justify-center items-center min-h-[75vh] gap-5">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">Please verified your email</p>
            <button className="btn btn-primary" onClick={handleSendUserEmailVerification}>Send verification</button>
            <ToastContainer />
        </div>
    );
};

export default SendVerification;