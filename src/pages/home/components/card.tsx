import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import {BadgeCharacter} from "./badge"

type CardProps = {
    image:string,
    name:string,
    species:string,
    status:string
}


export const CardComponent:React.FC<CardProps> = ({image, name, species, status}) => {
    return(<div>
        <Card sx={{width:"200px", mt:"30px"}}>
            <CardMedia 
            component="img"
            height="194"
            width="200"
            image={image}
            alt={name}/>
            <CardContent>
                <Typography variant="h4" sx={{mb:2}}>{name}</Typography>
                <Divider/>
                <Typography sx={{mt:2}}>Specie:{species}</Typography>
                <Typography sx={{mt:2}}>Status:<BadgeCharacter status={status}></BadgeCharacter></Typography>
                <CardActions>
                    <Button variant="contained" size="small" fullWidth>Learn More</Button>
                </CardActions>
            </CardContent>
        </Card>
    </div>)
}