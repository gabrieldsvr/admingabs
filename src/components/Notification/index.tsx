import {Alert, Button, IconButton, Snackbar} from "@mui/material";
import * as React from "react";
import {useContext, useState} from "react";
import {SnackbarContext} from "./SnackbarContext";


interface NotificationProps {
    message: string;
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
    severity: 'success' | 'info' | 'warning' | 'error';
}
export const Notification:React.FC<NotificationProps> = ({message,vertical='top',horizontal='right',severity='success'}) => {

    const { closeSnackbar } = useContext(SnackbarContext);


    const handleClose = () => {
        closeSnackbar();
    };
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
                open={true}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={severity}  sx={{ width: '100%' }} variant={"filled"}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
}
