import { AppBar, Box, Container, Toolbar, Grid, Button, Typography, Stack } from "@mui/material";
import * as React from "react";

export const Navbar: React.FC<{}> = () => {
    return(
        <Box sx={{ flexGrow:1 }}>
            <AppBar position="fixed">
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
                          <Button variant="outlined">Login</Button>
                          <Button variant="contained">Register</Button>
                            </Stack>
                          </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}