import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center my-32">
            Opps... <br />
            <Link to={'/'} className="btn">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;