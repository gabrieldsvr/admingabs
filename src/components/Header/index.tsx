import {Button, IconButton} from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import {MenuLateral} from "../MenuLateral";
import {Link} from "react-router-dom";


export const Header = () => {


    const [menuLateral, setMenuLateral] = React.useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setMenuLateral(!menuLateral);
    };

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <AppBar position="static" sx={{mb: 5}}>
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawer(true)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <MenuLateral click={toggleDrawer} state={menuLateral}/>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        GABS PIB FLORIPA
                    </Typography>
                    <Button color="inherit" onClick={logout}>Sair</Button>
                </Toolbar>
            </AppBar>
            <br/>
        </>
    );
}
