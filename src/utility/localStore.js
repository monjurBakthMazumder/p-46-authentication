const getStoredJobApplication = () => {
    const storeJobApplication = localStorage.getItem('job-application');
    if(storeJobApplication){
        return JSON.parse(storeJobApplication);
    }
    return [];
}

const saveJobApplication = id =>{
    const storeJobApplications = getStoredJobApplication();
    const exits = storeJobApplications.find(jobId => jobId === id)
    if(!exits){
        storeJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storeJobApplications))
    }
}

export { saveJobApplication, getStoredJobApplication }