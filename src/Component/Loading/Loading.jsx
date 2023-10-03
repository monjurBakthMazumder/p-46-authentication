import { ClockLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-[75vh]">
            <ClockLoader
                color="#4036d6"
                size={100}
                />
        </div>
    );
};

export default Loading;