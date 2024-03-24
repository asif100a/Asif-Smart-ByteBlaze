import { Outlet } from "react-router-dom";
import Navber from "../LayOuts/Navber";
import Footer from "../LayOuts/Footer";
import './Root.css';

const Root = () => {
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