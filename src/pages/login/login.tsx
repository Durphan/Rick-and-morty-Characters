import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material"
import * as React from "react"
import { UseNotification } from "../../context/notification.context";
import { LoginValidate } from "./utils/validateForm";
import { Navbar } from "../../components/navbar";
import { ThemeConfig } from "../../config/theme.config";



type Logintype = {
    username: string;
    password: string;
};

export const Login = () => {

    const [loginData, setLoginData] = React.useState<Logintype>({
        username: "",
        password: "",
    });

    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const { getError, getSuccess } = UseNotification()



    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        LoginValidate.validate(loginData).then(() => {
            getSuccess(JSON.stringify(loginData))

        }).catch((error) => {
            getError(error.message)
        })
    }


    return (
        <div>
            <ThemeConfig>
        <Container>
        <Navbar nameButtonA={"Home"} navigateButtonA={"/"}/>
            <Grid
                container direction="column"
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ minHeight: "70vh", }}>
                <Grid item>
                    <Paper sx={{
                        padding: "1.2em",
                        borderRadius: "0.5em"
                    }}>
                        <Typography
                            variant="h4"
                            sx={{ mt: 1, mb: 1 }}
                        >
                            Login
                        </Typography>
                        <Box
                            component={"form"}
                            onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                type="text"
                                label="Email" 
                                sx={{ mt: 2, mb: 1.5 }} 
                                name="username" 
                                onChange={dataLogin} />
                            <TextField 
                            fullWidth 
                            type="password"
                            label="Password" 
                            sx={{ mt: 2, mb: 1.5 }} 
                            name="password" 
                            onChange={dataLogin} />
                            <Button 
                            type="submit" 
                            variant="contained" 
                            sx={{ mt: 1.5, mb: 3 }}>
                                Iniciar Sesion
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        </ThemeConfig>
        </div>
    )
}