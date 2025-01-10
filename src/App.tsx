import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react';
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import Navbar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Platform } from './hooks/useGames';
import { Genre } from './hooks/useGenres';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <GridItem area="aside" paddingX={2}> <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} /> </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} paddingBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>

  )
}

export default App
