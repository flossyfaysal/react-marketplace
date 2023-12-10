import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import ItemList from './components/ItemList'

function App() {

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      <GridItem w='100%' h='10' bg='blue.500'>
        <ItemList />
      </GridItem>
    </Grid>
  )
}

export default App
