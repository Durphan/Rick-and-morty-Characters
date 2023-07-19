import * as React from "react"
import { ThemeConfig } from "../../config/theme.config"
import { Navbar } from "../../components/navbar"
import { Button, Container } from "@mui/material"
import { UseNotification } from "../../context/notification.context"


export const Home: React.FC<{}> = () => {
  const {getError} = UseNotification()
  const handleClick = () =>{
    getError("Hola mundo")
  }
  return (
        <div>
        <ThemeConfig>
            <Navbar/>
          <Container maxWidth="xl" sx={{ mt:9 }}>
            <Button variant="contained" onClick={handleClick}>Hola mundo</Button>
          </Container>
          </ThemeConfig>
       </div> )  
}

