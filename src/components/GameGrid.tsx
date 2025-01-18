import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Box width="100%" textAlign="center" marginY={3}><Spinner /></Box>}
    >
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
        padding="10px"
      >

        {isLoading && [...Array(10).keys()].map(item =>
          <GameCardContainer key={item}>
            <GameCardSkeleton key={item} />
          </GameCardContainer>)}

        {
          data?.pages.map(page => (
            <React.Fragment>
              {page.results.map(game =>
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              )}
            </React.Fragment>
          ))
        }

      </SimpleGrid>
    </InfiniteScroll>
  )
}

export default GameGrid;
