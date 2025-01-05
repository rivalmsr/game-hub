import { Button, Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/NavBar'

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav"> <Navbar /> </GridItem>
      <Show above='lg'>
        <GridItem area="aside" bg='green.500'> Aside </GridItem>
      </Show>
      <GridItem area="main" bg='blue.500'> main </GridItem>
    </Grid>

  )
}

export default App
