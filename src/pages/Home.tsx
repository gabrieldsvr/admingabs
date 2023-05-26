import * as React from 'react';
import {Header} from "../components/Header";
import {Alert, Button, Container} from "@mui/material";
import {useContext} from "react";
import {SnackbarContext} from "../components/Notification/SnackbarContext";



const Home = () => {
    const { showSnackbar } = useContext(SnackbarContext);
    const hanndleStnack = () => {
        showSnackbar("teste", "success");
    }
    return (
        <>
            <Header/>
            <Container>
            <h1>HOME</h1>
                <Button onClick={hanndleStnack}>scnak</Button>
            </Container>
        </>
    );
}
export default Home;