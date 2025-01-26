import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList'
import Navbar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }} templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }} >
      <GridItem area="nav"> <Navbar /> </GridItem>
      <Show above='lg'>
        <GridItem area="aside" paddingX={2}> <GenreList /> </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} paddingBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>

  )
}

export default App
