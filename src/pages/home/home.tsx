import { ThemeConfig } from "../../config/theme.config"
import { Navbar } from "../../components/navbar"
import { Button, Container, Grid } from "@mui/material"
import { HeaderComponent } from "./components/header"
import * as React from "react"
import { Characters } from "./services/characters"
import { CardComponent } from "./components/card"
import { TypeCharacter } from "./interface/character.interface"



export const Home = () => {
  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>([])

    React.useEffect(() =>{
      Characters.getAll({page: 1}).then((r)=>{
        setAllCharacters(r.data.results)
      }).catch((e) =>{
        console.error(e)
      })
  }, [])




  return (
      <div>
        <ThemeConfig>
            <Navbar nameButtonA={"Login"} navigateButtonA={"/login"} nameButtonB={"Register"} />
          <Container 
          maxWidth="xl" 
          sx={{ mt:9 }}>
            <HeaderComponent 
            title="Hola mundo" 
            description="Hola mundo descripcion"
            element={<Button fullWidth variant="contained">Hola mundo</Button>}/>
          </Container>
          <div>
            {
              allCharacters?.length!==0 ? (
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                  {allCharacters!.map((character) => (
                    <Grid item>
                    <CardComponent 
                    key={character.id}
                    image={character.image} 
                    name={character.name} 
                    species={character.species}
                    status={character.status}/>
                    </Grid>
                  ))}
                </Grid>
              ) :" "
            }
          </div>
          </ThemeConfig>
      </div> )  
}

