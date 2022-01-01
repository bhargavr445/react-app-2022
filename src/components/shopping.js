import React from 'react';
import { Link } from "react-router-dom";

function Shopping() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/men">Men</Link>
                </li>
                <li>
                    <Link to="/women">Women</Link>
                </li>
                <li>
                    <Link to="/kids">Kids</Link>
                </li>
            </ul>
        </div>
    )
}

export default Shopping;