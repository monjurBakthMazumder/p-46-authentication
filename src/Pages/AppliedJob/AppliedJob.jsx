import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../utility/localStore";
import AppliedJobCart from "../../Component/AppliedJobCart/AppliedJobCart";
import useGetData from "../../Hock/useGetData";
import useAuth from "../../Hock/useAuth";
import SendVerification from "../../Component/SendVerification/SendVerification";


const AppliedJob = () => {
    const { user } = useAuth()
    const [jobs] = useGetData();

    const [appliedJobs,setAppliedJobs] = useState([]);
    const[displayJobs, setDisplayJobs] = useState([])

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job=> job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onside'){
            const onsiteJobs = appliedJobs.filter(job=> job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
        
    }

    useEffect(()=>{
        const storeJobsIds = getStoredJobApplication();
        if(jobs?.length > 0 ){

            // const jobsApplied = jobs.filter(job => storeJobsIds.includes(job.id))

            const jobsApplied = []
            for(const id of storeJobsIds){
                const job = jobs.find(job => job.id === id)
                if(job){
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
            // console.log(jobsApplied);
        }
    },[jobs])
    return (
        <div className="min-h-[70vh]">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold py-10 md:py-20 text-center bg-[#3651ff08]">Applied Jobs</h1>
            {
                !user?.emailVerified
                ?
                <SendVerification/>
                :
                <>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center my-2  underline">Total Jobs: {displayJobs?.length}</h1>
                    <div className="px-5 md:px-[10%] mb-10"> 
                        <div className="flex justify-end mb-2 md:mb-5">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn m-1">Filter by</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                                    <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                                    <li onClick={()=> handleJobsFilter('onside')}><a>Onside</a></li>
                                </ul>
                            </div>
                        </div>   
                            <div className="flex flex-col gap-5">
                                {
                                    displayJobs?.map((job,i)=> 
                                        <AppliedJobCart
                                            key={i}
                                            job={job}
                                        />
                                    )
                                }
                            </div>
                    </div>
                </>
            }
        </div>
    );
};

export default AppliedJob;