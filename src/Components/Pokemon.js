import { useState,useEffect } from 'react'
import Stats from './Stats'
import axios from 'axios'

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
        <div>
            {data !== undefined ?
            <div>
            <h2> # {data.id} {data.name}</h2>
            <img src={data.sprites.front_default} alt={data.name}/>

            <hr/>

            <div>
                <p>height : {data.height}</p>
                <p>weight : {data.weight}</p>

                {console.log(data.stats)}

                {data.stats.map(stats => 
                <Stats key={stats.stat.name} base_name={stats.stat.name} base_value={stats.base_stat}/>)}
            </div>


            </div>
            :""}


        </div>
    )
}


export default Pokemon