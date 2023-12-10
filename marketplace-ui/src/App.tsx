import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import ProductList from './components/ProductList'
import CategoryList from './components/CategoryList'

function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns='repeat(200px, 1fr)' gap={5}>
      <GridItem area={"nav"}>
        <nav>
          <ul>
            <li>Hi</li>
          </ul>
        </nav>
      </GridItem>
      <GridItem area={"aside"}>
        <CategoryList />
      </GridItem>
      <GridItem area={"main"}>
        <ProductList />
      </GridItem>
    </Grid>
  )
}

export default App
