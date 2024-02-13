import { AppBar, Box, Container, Toolbar, Grid, Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

type NavbarProps = {
  nameButtonA:String
  navigateButtonA:String

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
                          <Typography color="primary">Durpha</Typography>
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