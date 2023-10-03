
import PropTypes from 'prop-types';

const Category = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div className='px-5 py-10 rounded-md bg-[#3f59fd08]'>
            <img src={logo} alt="" className='p-3 rounded-lg bg-[#a2a9d808]'/>
            <h1 className='text-xl font-semibold my-3'>{category_name}</h1>
            <p>{availability}</p>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object
};

export default Category;