
import PropTypes from 'prop-types';
import { BiLocationPlus } from 'react-icons/bi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card card-compact border-2 rounded-lg">
        <figure className='p-6 pb-0'><img src={logo} alt={`logo of ${company_name}`} className='mr-auto'/></figure>
        <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <p className='text-lg font-light'>{company_name}</p>
            <div className="flex items-center gap-3 flex-wrap">
                <button className="btn btn-primary btn-outline">{remote_or_onsite}</button>
                <button className="btn btn-primary btn-outline">{job_type}</button>
            </div>
            <div className="flex items-center gap-5 flex-wrap my-3">
                <span className='flex items-center gap-1 text-base'><BiLocationPlus/> {location}</span>
                <span className='flex items-center gap-1 text-base'><RiMoneyDollarCircleLine/> {salary}</span>
            </div>
            <div className="card-actions">
            <Link to={`/job/${id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
        </div>
    );
};

Job.propTypes = {
    job : PropTypes.object,
};

export default Job;