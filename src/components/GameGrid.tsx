import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
    }} spacing={6} padding="10px">

      {isLoading && [...Array(10).keys()].map(item =>
        <GameCardContainer key={item}>
          <GameCardSkeleton key={item} />
        </GameCardContainer>)}

      {data?.results.map(game =>
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      )}
    </SimpleGrid>
  )
}

export default GameGrid;
