import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, loading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 5,
      }} spacing={10} padding="10px">

        {loading && [...Array(10).keys()].map(item => <GameCardSkeleton key={item} />)}

        {games.map(game =>
          <GameCard game={game} />
        )}
      </SimpleGrid>
    </>
  )
}

export default GameGrid;
