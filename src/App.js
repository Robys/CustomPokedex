import { useEffect,useState } from 'react';
import axios from 'axios'
import Pokemon from './Components/Pokemon';

function App() {
  const [data,SetData] = useState()
  const [index,SetIndex] = useState(0)

  useEffect(()=>{
    async function GetAllPokemons(){
      await axios("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(res => SetData(res.data.results))
    }

    GetAllPokemons()
    

  },[])

  const AddToIndex = () =>{
    if(index !== data.lenght)
      SetIndex(index+1)
  }

  const SubToIndex = () =>{
    if(index > 0)
      SetIndex(index-1)
  }


  return (
    <div className="App">
      <ul>

      {data ? <Pokemon address={data[index].url}/> : ""}

      <button onClick={AddToIndex}>Prox</button>

      <button onClick={SubToIndex}>Prev</button>

      </ul>

    </div>
  );
}

export default App;
