import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { data, error, loading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 5,
      }} spacing={3} padding="10px">

        {loading && [...Array(10).keys()].map(item =>
          <GameCardContainer>
            <GameCardSkeleton key={item} />
          </GameCardContainer>)}

        {data.map(game =>
          <GameCardContainer>
            <GameCard game={game} />
          </GameCardContainer>
        )}
      </SimpleGrid>
    </>
  )
}

export default GameGrid;
