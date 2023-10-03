
import PropTypes from 'prop-types';
import { BiLocationPlus } from 'react-icons/bi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const AppliedJobCart = ({job}) => {
    const {id, logo, job_title, company_name, location, job_type, salary, remote_or_onsite} = job;

    return (
        <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row justify-center items-center border">
            <figure className='w-48 h-48 bg-[#F4F4F4] p-6 m-6 mr-0'><img src={logo} alt="Movie"/></figure>
            <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p className='text-lg font-light'>{company_name}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                        <button className="btn btn-primary btn-outline">{remote_or_onsite}</button>
                        <button className="btn btn-primary btn-outline">{job_type}</button>
                    </div>
                    <div className="flex items-center gap-1 md:gap-5 flex-wrap my-3">
                        <span className='flex items-center gap-1 text-base'><BiLocationPlus/> {location}</span>
                        <span className='flex items-center gap-1 text-base'><RiMoneyDollarCircleLine/> {salary}</span>
                    </div>
            </div>
            <div className="card-actions">
            <Link to={`/job/${id}`} className="btn btn-primary mb-10 md:mb-0 mr-0 md:mr-10">View Details</Link>
            </div>
        </div>
    );
};

AppliedJobCart.propTypes = {
    job : PropTypes.object,
};

export default AppliedJobCart;