import SendVerification from "../../Component/SendVerification/SendVerification";
import useAuth from "../../Hock/useAuth";


const Blogs = () => {
    const {user} = useAuth()
    return (
        <>
            {
                !user?.emailVerified
                ?
                <SendVerification/>
                :
                <div className="flex justify-center items-center h-[70vh] text-2xl md:text-4xl lg:text-6xl font-bold">
                    No Blog Found
                </div>
            }
        </>
    );
};

export default Blogs;