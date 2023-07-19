import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material"
import * as React from "react"



type Logintype= {
    username: string;
    password: string;
};

export const Login:React.FC = () => {
 
    const [loginData, setLoginData] = React.useState<Logintype>({
        username:"",
        password:"",
    });

    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(loginData)
    }

  return (
    <Container maxWidth="sm">
        <Grid 
        container direction="column" 
        alignItems={"center"} 
        justifyContent={"center"}
        sx={ { minHeight:"100vh", } }>
            <Grid item>
                <Paper sx={{padding:"1.2em",
                            borderRadius:"0.5em"}}>
                                <Typography variant="h4" sx={{mt:1, mb:1}}>Iniciar Sesion</Typography>
                                <Box component={"form"} onSubmit={handleSubmit}>
                                <TextField fullWidth type="text" label="Email" sx={{mt:2, mb:1.5}} required name="username" onChange={dataLogin}/>
                                <TextField fullWidth type="password" label="Password" sx={{mt:2, mb:1.5}} required name="password" onChange={dataLogin}/>
                                    <Button type="submit" variant="contained" sx={{mt:1.5, mb:3}}>
                                        Iniciar Sesion
                                    </Button>
                        </Box>
                </Paper>
            </Grid>
        </Grid>
    </Container>
  )
}