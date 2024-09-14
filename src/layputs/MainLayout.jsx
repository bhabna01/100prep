import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";


const MainLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;