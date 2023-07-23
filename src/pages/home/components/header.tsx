import { Box, Grid, Typography, Divider } from "@mui/material"

type HeaderProps = {
    title:String,
    description:String,
    element?:React.ReactNode | null
}

export const HeaderComponent:React.FC<HeaderProps> = ({title, description, element}) =>{
    return(
        <div>
        <Box
        sx={{ width:"100%", mb:"25px" }}>
            <Grid 
            container 
            direction="row" 
            justifyContent="center" 
            alignItems="center">
                <Grid item xs={5}></Grid>
                </Grid>
                <Grid 
            container 
            direction="column" 
            justifyContent="center" 
            alignItems="center"
            >
                <Grid item>
                    <Typography variant="h1">
                        {title}
                    </Typography>
                </Grid>
                <Grid item sx={{mt:2}}>
                    <Typography>
                        {description}
                    </Typography>
                </Grid>
                {element !== undefined && <Grid sx={{mt:4, width:"50%"}} item>{element}</Grid>}
                </Grid>
            </Box>
            <Divider/>
        </div>
    )
}