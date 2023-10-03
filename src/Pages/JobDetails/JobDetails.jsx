import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStore";
import { AiOutlineMail, AiOutlinePhone, AiTwotoneCalendar } from 'react-icons/ai';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiLocationPlus } from 'react-icons/bi';
import useGetData from "../../Hock/useGetData";
import useAuth from "../../Hock/useAuth";
import SendVerification from "../../Component/SendVerification/SendVerification";

const JobDetails = () => {
    const {user} = useAuth()
    const [jobs] = useGetData()
    const {id} = useParams()
    //this is mot proper way for load specific data
    const idInt = parseInt(id)
    const job = jobs?.find(job => job?.id == idInt)
    const { job_title, company_name, location, job_type, salary, job_description,job_responsibility,educational_requirements, experiences, contact_information} = job || {};
    
    const handleApplyJob = () => {
        saveJobApplication(idInt)
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
    }
    return (
        <div>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold py-10 md:py-20 text-center bg-[#3651ff08]">Job Details</h1>
            {
                !user?.emailVerified
                ?
                <SendVerification/>
                :
                <div className="flex flex-col md:flex-row justify-between gap-5 px-5 md:px-[10%] my-10 md:my-20">
                    <div className="border md:w-2/3 p-5">
                        <h1 className="text-xl font-bold mb-1">{job_title}</h1>
                        <p className="mb-1">{company_name}</p>
                        <p className="mb-5">{location}</p>
                        <p className="mb-5"><span className="font-bold">Job Description: <br /></span>{job_description}</p>
                        <p className="mb-5"><span className="font-bold">Job Responsibility: <br /></span>{job_responsibility}</p>
                        <p className="mb-5"><span className="font-bold">Educational Requirements: <br /></span>{educational_requirements}</p>
                        <p className="mb-5"><span className="font-bold">Experiences: <br /></span>{experiences}</p>
                    </div>
                    <div className="border md:w-1/3 p-5 bg-[#3651ff09] h-fit">
                        <div className="">
                            <h1 className="text-xl font-bold my-3">Job Details</h1>
                            <hr />
                            <hr />
                            <div className="my-3">
                                <p className="my-2 flex items-center gap-1 text-lg"><RiMoneyDollarCircleLine className="text-primary"/><span className="font-semibold">Salary: </span>{salary}</p>
                                <p className="my-2 flex items-center gap-1 text-lg"><AiTwotoneCalendar className="text-primary"/><span className="font-semibold">Job Title: </span>{job_type}</p>
                            </div>
                            <h1 className="text-xl font-bold my-3">Contact Information</h1>
                            <hr /><hr />
                            <div className="my-3">
                                <p className="my-2 flex items-center gap-1 text-lg"><AiOutlinePhone className="text-primary"/><span className="font-semibold">Phone: </span>{contact_information?.phone}</p>
                                <p className="my-2 flex items-center gap-1 text-lg"><AiOutlineMail className="text-primary"/><span className="font-semibold">Email: </span>{contact_information?.email}</p>
                                <p className="my-2 text-lg"><span className="flex items-center gap-1 w-fit"><BiLocationPlus className="text-primary"/><span className="font-semibold">Address: </span></span>{contact_information?.address}</p>
                            </div>

                        </div>
                        <button 
                            onClick={handleApplyJob}
                            className="btn btn-primary w-full"
                        >Apply Now</button>
                    </div>
                </div>
            }
            <ToastContainer />
        </div>
    );
};

export default JobDetails;