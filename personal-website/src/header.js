import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from './Logo.png';

export default function Header() {
    return (
        <AppBar position="static" sx={{backgroundColor: "#f1ddbf"}}>
            <Toolbar>
                <img src={logo} alt=""  style={{ width: 60, height: 60 }} />
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    
                </IconButton>

                
                <Button sx={{ color: '#525e75', fontSize: '16px' }}>ABOUT</Button>
                <Button sx={{ color: '#525e75', fontSize: '16px' }}>WORK</Button>
                <Button sx={{ color: '#525e75', fontSize: '16px' }}>CONTACT</Button>

                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                </Typography>
                <Button sx={{ color: '#525e75', fontSize: '16px' }}>MODE</Button>
            </Toolbar>
        </AppBar>
    );
}