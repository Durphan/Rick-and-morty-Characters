/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ThemeConfig } from "../../config/theme.config"
import { Navbar } from "../../components/navbar"
import {Box, CircularProgress, Container, Grid, Pagination, Stack } from "@mui/material"
import { HeaderComponent } from "./components/header"
import * as React from "react"
import { Characters } from "./services/characters"
import { CardComponent } from "./components/card"
import { TypeCharacter } from "./interface/character.interface"



export const Home = () => {
  const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [pages, setPages] = React.useState<number>(1)
  const [count, setCount] = React.useState<number>(1)

    React.useEffect(() =>{
      setLoading(true)
      Characters.getAll({page:pages}).then((r)=>{
        setCount(r.data.info.pages)
        setAllCharacters(r.data.results)
        setTimeout(() => setLoading(false), 1000)
      }).catch((e) =>{
        console.error(e)
      })
  }, [pages])

const handleChange = (_event: React.ChangeEvent<unknown>, value:number) =>{
  setPages(value)
}


  return (
      <div>
        <ThemeConfig>
            <Navbar nameButtonA={"Login"} navigateButtonA={"/login"} />
          <Container >
            <HeaderComponent
            title="REST API test" 
            description="It's a webpage to test Axios, using Rick and Morty API"/>
          </Container>
          <div>
            {
              loading ? (
                <Box sx={{display:"flex", justifyContent:"center", mt:"4"}}>
                  <CircularProgress/>
                </Box>
              ) : (
            
              allCharacters?.length!==0 ? (
                <Grid sx={{my:2}} container spacing={3} justifyContent="center" alignItems="center">
                {allCharacters!.map((character) => (
                  <Grid item key={character.id}>
                    <CardComponent 
                    image={character.image} 
                    name={character.name} 
                    species={character.species}
                    status={character.status}/>
                    </Grid>
                  ))} 
                </Grid>
              ) : ("No data")
              )}
          </div>
          <Stack justifyContent="center" alignItems="center">

            <Pagination count={count} page={pages} onChange={handleChange} />
          </Stack>
          </ThemeConfig>
      </div> )  
}

