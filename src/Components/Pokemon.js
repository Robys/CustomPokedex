import { useState,useEffect } from 'react'
import Stats from './Stats'
import Moves from './Moves';
import axios from 'axios'

import {Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    CardContent,
    Card,
    CardMedia,
    Typography } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Pokemon ({address}){
    const [data,SetData] = useState()

    useEffect(() =>{
        const GetPokemonInfo = async ()=>{
            const response = await axios(address)
            SetData(response.data)
            console.log(data)
        }

        GetPokemonInfo()

    },[address])


    return (
        <div style={{marginTop:"100px"}}>
            {data !== undefined ?
            
            
            <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
            >

            <Card sx={{minWidth:400}} style={{backgroundColor:"#a31545",color:"#FFFF"}}>
                <CardMedia 
                component="img"
                style={{backgroundColor:"#FFFF"}}
                height="200"
                image={data.sprites.front_default} 
                alt={data.name}/>

            <CardContent>

            <Typography variant="h4" noWrap > # {data.id} {data.name}</Typography>
            <Typography variant="h6" noWrap >Type</Typography>
                <ul>
                    {data.types.map(t => (
                        <p key={t.slot}>{t.type.name}</p>) )}
                </ul>

            </CardContent>

            </Card>

            <Card sx={{minWidth:500}} style={{backgroundColor:"#a31545",color:"#FFFF"}}>
                <CardContent>
                <p>height : {data.height}</p>
                <p>weight : {data.weight}</p>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Attributes</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    {data.stats.map(stats => 
                         <Stats key={stats.stat.name} 
                         base_name={stats.stat.name} 
                         base_value={stats.base_stat}/>)}
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Moves</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    {data.moves.map(m => 
                        <Moves key={m} moves={m}/> )}
                    </AccordionDetails>
                </Accordion>


                </CardContent>
            </Card>

            </Stack>
            :""}


        </div>
    )
}


export default Pokemon