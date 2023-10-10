import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Searchbar from "./Searchbar";
function Navbar() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#4982c7" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <span style={{ fontWeight: "bold" }}> <a href="/" style={{ textDecoration: "none", color: "white" }}>travelbuddy.</a></span>
                    </Typography>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px"}}>
                        <Searchbar></Searchbar>
                        <FavoriteBorderIcon onClick={()=>{navigate("/wishlist")}}></FavoriteBorderIcon>
                        <Button color="inherit" onClick={() => { navigate("/login") }}><span style={{ fontWeight: "bold" }}>Login</span></Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
