import * as React from 'react';
import {useContext, useState} from 'react';
import {Container} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import LoadingButton from '@mui/lab/LoadingButton';
import PropTypes from 'prop-types';
import {SnackbarContext} from "../components/Notification/SnackbarContext";
import LoginIcon from '@mui/icons-material/Login';

const Login = ({setToken}) => {
    const {showSnackbar} = useContext(SnackbarContext);
    const [loading, setLoading] = useState(false);

    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();
        const data = await loginUser({
            email,
            password
        });
        if (data.status == 200) {
            showSnackbar("Login efetuado com Suceso!", "success")
            setTimeout(() => {
                setToken(data.token);setLoading(false);
            }, 2000)
        } else {
            showSnackbar(data.error, "error")
            setLoading(false);
        }

    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password" onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Manter conectado"
                    />

                    <LoadingButton
                        type="submit"
                        fullWidth
                        sx={{mt: 3, mb: 2}}
                        onClick={handleSubmit}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<LoginIcon/>}
                        variant="contained"
                    >
                        <span>{loading ? "Entrando" : "Entrar"}</span>
                    </LoadingButton>

                </Box>
            </Box>
        </Container>
    );
}
export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}