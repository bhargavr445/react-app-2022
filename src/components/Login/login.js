import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
    let navigate = useNavigate();
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const emailChangeHandler = (e) => {
        setEnteredUserName(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        let credObj = {};
        credObj.userName = enteredUserName;
        credObj.password = enteredPassword;
        axios.post('http://localhost:3010/api/login', credObj).then(
            (resp) => {
                console.log(resp);
                localStorage.setItem('Authorization', resp.data.data.token);
                navigate(`/emp`);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    const passwordChangeHandler = (e) => {
        e.preventDefault();
        setEnteredPassword(e.target.value);
    }

    return (
        <div>
            <form>
                <label htmlFor="userName">User Name</label>
                <input
                    type="text"
                    id="userName"
                    value={enteredUserName}
                    onChange={emailChangeHandler} /> <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={passwordChangeHandler}/>
                <button type="submit" onClick={submitForm}>Login</button>
            </form>
        </div>
    )

}

export default Login;