import React from "react";
import { useHistory } from 'react-router-dom';

const Auth = () => {
    const history = useHistory();
    const loggedInStatus = localStorage.getItem("loggedIn");
    if(loggedInStatus !== "true")
        history.push("/")

    return (
        <>
        </>
    )
}

export default Auth;