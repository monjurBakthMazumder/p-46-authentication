import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4);
    useEffect(()=>{
        fetch('./jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="my-10 px-5 md:px-[10%]">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Featured Jobs</h1>
                <p className="text-sm md:text-base my-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                {
                    jobs.slice(0,dataLength).map(job => 
                        <Job
                            key={job.id}
                            job={job}
                        />
                    )
                }
            </div>
            <div className={`card-actions justify-center my-5 ${dataLength === jobs.length && 'hidden'}`}>
                <button 
                    onClick={()=>setDataLength(jobs.length)}
                    className="btn btn-primary"
                >Show all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;