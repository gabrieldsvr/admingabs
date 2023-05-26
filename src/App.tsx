import React from 'react'

import './App.css'
import MainRoutes from "./routes/MainRoutes";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Login from "./pages/Login";
import useToken from "./components/Login/useToken";
import isTokenValid from "./utils/auth";
import {SnackbarProvider} from "./components/Notification/SnackbarContext";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif'
        ].join(','),
    }
});


function App() {

    const {token, setToken} = useToken();
    if (!isTokenValid(token)) {
        return <SnackbarProvider><Login setToken={setToken}/></SnackbarProvider>
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <SnackbarProvider>
                <MainRoutes/>
                </SnackbarProvider>
            </ThemeProvider>
        </>
    )
}

export default App;