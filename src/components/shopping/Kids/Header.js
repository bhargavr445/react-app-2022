import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/shopping/kids/boys">Boys</Link>
                </li>
                <li>
                    <Link to="/shopping/kids/girls">Girls</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;