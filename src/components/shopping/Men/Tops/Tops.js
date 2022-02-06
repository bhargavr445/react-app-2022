import axios from "axios";
import { useState, useEffect } from "react";

const Tops = () => {

    const [apiData, setApiData] = useState([]);
    
    useEffect(
        () => {
            axios.get('http://localhost:3010/api/student').then(
                (resp) => {
                    setApiData(resp.data.data);
                },
                (err) => { console.log(err); }
            )
        }, []
    );

    return (
        
        <div>
            {/* <button onClick={getApiData}>Fetch</button> */}
            { apiData.length ? <table >
                <tbody>
                    <tr key="heraderRow">
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                    {apiData.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{row.studentId}</td>
                                <td>{row.studentName}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : ''}
        </div>
    )

}

export default Tops;