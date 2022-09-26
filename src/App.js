import React, { useEffect,useState } from 'react';
import axios from 'axios'
import Pokemon from './Components/Pokemon';

//UI Elements
import { Stack, AppBar, Toolbar,Fab,
  Drawer,List,ListItem,
  Typography,IconButton, ThemeProvider} from '@mui/material';

  //Icons
  import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
  import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
  import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
  import ArrowRightIcon from '@mui/icons-material/ArrowRight';

  //Theme
  import theme from './style/theme'

function App() {
  const [data,SetData] = useState()
  const [index,SetIndex] = useState(0)
  const [query,SetSearch] = useState()
  const [open,SetOpen] = useState()
  const [apply,SetApply] = useState(false)

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

  const handleDrawer = () =>{
    SetOpen(!open)
  }


  const applySearch = e => {
    e.preventDefault()
    SetApply(true)
    handleDrawer()
  }


  return (
    <ThemeProvider theme={theme}>

      <AppBar>
        <Toolbar>
        <Fab color="secondary" onClick={handleDrawer} >
            <MenuRoundedIcon/>
          </Fab>

          <Typography variant="h6"
            noWrap
            component="div"
             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              
             </Typography>

          <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
      >


      <Fab onClick={SubToIndex}>
          <ArrowLeftIcon/>
      </Fab>

      <Fab onClick={AddToIndex}>
        <ArrowRightIcon/>
      </Fab>

      </Stack>

        </Toolbar>
      </AppBar>

      <Drawer anchor='left' variant="temporary" 
      open={open} style={{height:"100%",width:"450px"}}>
        <List>
          <ListItem>
            <Typography variant="h6" noWrap onClick={handleDrawer}>Pokedex</Typography>
          </ListItem>

          <ListItem>
            <input type="text" placeholder='Search' onChange={e => SetSearch(e.target.value)}/>
            <IconButton onClick={applySearch}  size="large">
            <SearchRoundedIcon/>
          </IconButton>
          </ListItem>

        </List>
      </Drawer>
        

      {apply ? <Pokemon address={`https://pokeapi.co/api/v2/pokemon/${query}`}/> :
      data ? <Pokemon address={data[index].url}/> : ""}
      
      
    </ThemeProvider>
  );
}

export default App;
