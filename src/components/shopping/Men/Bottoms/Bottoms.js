import React, { useEffect, useState } from "react";
import axios from 'axios';

const Bottoms = () => {

    const [myData, setData] = useState({});

    useEffect(() => {
        console.log('on init...');
        return () => {
            console.log('on destroy...');
        };
    }, [myData]);

    const getBottoms = () => {
        setData('Setting Data...');
        axios.get('http://universities.hipolabs.com/search').then(
            (data) => {
                setData(data);
                console.log(data['data']);
            },
            (err) => {
                console.log(err);
            }
        )
    }

    return (
        <div>
            <h2>Men Bottoms</h2>
            {/* {data} */}
            <button onClick={getBottoms}>Get Bottoms</button>
        </div>
    )
}

export default Bottoms;