

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5 px-5 md:px-[10%] bg-[#7E90FE08] pt-5 md:pt-10">
            <div className="flex-1 text-center md:text-left">    
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">One Step <br />
                Closer To Your <br />
                <span className="text-primary">Dream Job</span></h1>
                <p className="my-5 px-[5%] md:px-0">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-primary">Get Start</button>
            </div>
            <div className="flex-1">
                <img src="./user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;