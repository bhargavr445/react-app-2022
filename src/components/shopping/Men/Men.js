import { Outlet } from 'react-router-dom';
import Header from './Header';

const Men = () => {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Men;