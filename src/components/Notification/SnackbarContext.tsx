import React, {createContext, ReactNode, useState} from 'react';
import {Notification} from "./index";

interface SnackbarContextProps {
    showSnackbar: (message: string, severety: 'success' | 'info' | 'warning' | 'error') => void;
    closeSnackbar: () => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

interface SnackbarProviderProps {
    children: ReactNode;
}

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({children}) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('');

    const showSnackbar = (message: string,severity: 'success' | 'info' | 'warning' | 'error') => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const closeSnackbar = () => {
        setSnackbarOpen(false);
    };

    const contextValue: SnackbarContextProps = {
        showSnackbar, closeSnackbar
    };

    return (

        <SnackbarContext.Provider value={contextValue}>

            {children}
            {snackbarOpen && (
                <Notification message={snackbarMessage} severity={snackbarSeverity}/>

            )}
        </SnackbarContext.Provider>
    );
};

export {SnackbarContext, SnackbarProvider};