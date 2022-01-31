import { useEffect, useState } from "react";

const Login = () => {
    const [enteredUserName, setEnteredUserName] = useState('');
    
    
    useEffect(() => {
        console.log('enteredUserName');
        const timer = setTimeout(() => {
            //axioscall here
        }, (500));
    return () => {
        clearInterval(timer)
        clearTimeout(timer)
    }},['state-here']);



    useEffect(() => {
        console.log('Exec....')
    },[enteredUserName]);

    const emailChangeHandler = (e) => {
        setEnteredUserName(e.target.value);
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
                <input type="password" id="password" />
            </form>
        </div>
    )

}

export default Login;