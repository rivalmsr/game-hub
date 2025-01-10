import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const { data, error, loading } = useGames(selectedGenre, selectedPlatform);

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
          <GameCardContainer key={item}>
            <GameCardSkeleton key={item} />
          </GameCardContainer>)}

        {data.map(game =>
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        )}
      </SimpleGrid>
    </>
  )
}

export default GameGrid;
