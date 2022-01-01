import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <Link to="/emp">Employee</Link>
                    </li>
                    <li>
                        <Link to="/create-emp">Create Employee</Link>
                    </li>
                    <li>
                        <Link to="/shopping">Shopping</Link>
                    </li>

                    <li>
                        <Link to="/indecision">Indecision</Link>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header;