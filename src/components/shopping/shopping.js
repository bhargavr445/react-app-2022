import React from 'react';
import { Link, Outlet } from "react-router-dom";


function Shopping() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/shopping/men">Men</Link>
                </li>
                <li>
                    <Link to="/shopping/women">Women</Link>
                </li>
                <li>
                    <Link to="/shopping/kids">Kids</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Shopping;