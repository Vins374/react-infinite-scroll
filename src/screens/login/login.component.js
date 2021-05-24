import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { 
    Box, 
    Card, 
    TextField, 
    Grid,
    Button, 
} from "@material-ui/core";
import Header from "./../../components/header/header.component";

const Login = () => {
    const history = useHistory();
    const [error, setError] = useState("");

    const [inputField , setInputField] = useState({
        username: '',
        password: '',
    })

    const inputsHandler = (e) =>{
        setInputField( {...inputField, [e.target.name]: e.target.value} )
    }

    const onSubmitHandler = (e) => {
        try {
            setError("");
            if(inputField.username === "foo" && inputField.password === "bar") {
                localStorage.setItem("loggedIn", true);
                history.push("/home");
            }
            else {
                setError("Invalid username and password")
            }        
        }
        catch(err) {
            setError("Something went wrong, please try after sometime.")
        }
        e.preventDefault();
    }

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("loggedIn");
        if(loggedInStatus === "true")
            history.push("home");
    }, [])

    return (
        <>
        <Header title="Login" />
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Card style={{ padding: 20 }}>
                <form>
                <Box>
                    <TextField name="username" value={inputField.username} onChange={inputsHandler} style={{width: "100%"}} label="Username" type="text" required />
                </Box>
                <Box>
                    <TextField name="password" value={inputField.password} onChange={inputsHandler} style={{width: "100%"}} label="Password" type="password" required />
                </Box>
                <Box style={{ marginTop: 10 }}>
                    <Button onClick={(e) => onSubmitHandler(e)} type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                    <p> {error} </p>
                </Box>
                </form>
            </Card>
            </Grid>
        </Grid>
        </>
    )
}

export default Login;