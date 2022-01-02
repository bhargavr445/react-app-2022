import Header from './Header';
import { Outlet } from "react-router-dom";


const Kids = () => {
    return(
        <div>
            
            <Header />
            <p>Kids Component</p>
            <Outlet />
        </div>
    )
}

export default Kids;