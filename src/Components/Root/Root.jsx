import { Outlet, useLocation } from "react-router-dom";
import Navber from "../LayOuts/Navber";
import Footer from "../LayOuts/Footer";
import './Root.css';
import { useEffect } from "react";

const Root = () => {
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if (location.pathname === '/') {
            document.title = `Byteblaze_home`;
        } else {
            document.title = `Byteblaze ${location.pathname.replace(`/`, '_')}`;
        }
        if(location.state){
            document.title = location.state;
        }
    }, [location.pathname])

    return (
        <div className="h-screen">
            <Navber></Navber>
            <div className="min-height">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;