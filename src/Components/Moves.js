import {List,ListItem} from '@mui/material'

const Moves = (moves) => {
   const ob = Object.values(moves)
   const arr = ob.map(moves => moves)
   const i = Object.values(arr).map(i => i.move)

   return(
    <List>
        {i.map(item => <ListItem>{item.name}</ListItem>)}
    </List>
   )
   
}

export default Moves