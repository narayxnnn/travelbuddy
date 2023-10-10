import React from 'react'
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import '../styles/login.css'
const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="mainParentDiv">
            <Typography style={{ fontSize: "30px", marginBottom: "20px" }}>Sign In</Typography>
            <div className="signupCard" style={{ borderRadius: "11px", backgroundColor: "#f7f5f5" }}>
                <input className="inputField" placeholder="Email ID" type="email"></input>
                <hr className="horizontalLine"></hr>
                <input className="inputField" placeholder="Password" type="password"></input>
                <hr className="horizontalLine"></hr>
                <button className="signupButton">Signin</button>
                <div className="bottomLink1">New user?
                    <Button
                        color="primary"
                        onClick={() => navigate("/signup")}>
                        register
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login