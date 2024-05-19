import { AppBar, Box, Container, Toolbar, Grid, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";


type NavbarProps = {
  nameButtonA:string
  navigateButtonA:string

}


export const Navbar:React.FC<NavbarProps> = ({nameButtonA, navigateButtonA}) => {
  const Navigate = useNavigate()
    return(
        <Box sx={{ flexGrow:1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container>
                        <Grid 
                        container direction="row"
                        justifyContent={"space-between"}
                        alignItems="center">
                          <Grid item>
                          <img src={"/EDLogo.svg"} alt="Esteban Durante" width={25} height={25}/>
                          </Grid>
                          <Grid item>
                            <Stack direction="row" spacing={2}>
                          <Button variant="outlined"  onClick={()=> Navigate(`${navigateButtonA}`)}>{nameButtonA}</Button>
                            </Stack>
                          </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}