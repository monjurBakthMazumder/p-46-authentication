import { Outlet } from "react-router-dom";
import Footer from "../Component/Shared/Footer/Footer";
import Header from "../Component/Shared/Header/Header";


const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;