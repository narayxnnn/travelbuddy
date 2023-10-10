import { useNavigate } from 'react-router-dom';
import "../styles/login.css"
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function Signup() {
    const navigate = useNavigate();
    return (
        <div className="mainParentDiv">
            <Typography style={{ fontSize: "30px", marginBottom: "20px" }}>Create account</Typography>
            <Card className="signupCard" style={{ borderRadius: "11px", backgroundColor: "#f7f5f5" }}>
                <input className="inputField" placeholder="Full name"></input>
                <hr className="horizontalLine"></hr>
                <input className="inputField" placeholder="Email ID" type="email"></input>
                <hr className="horizontalLine"></hr>
                <input className="inputField" placeholder="Password" type="password"></input>
                <hr className="horizontalLine"></hr>
                <button className="signupButton">Signup</button>
                <div className="bottomLink1">Already user?
                    <Button
                        color="primary"
                        onClick={() => navigate("/login")}>
                        Signin
                    </Button>
                </div>
            </Card>
        </div>
    );
}