import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/shopping/men/tops">Tops</Link>
                </li>
                <li>
                    <Link to="/shopping/men/bottoms">Bottoms</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;