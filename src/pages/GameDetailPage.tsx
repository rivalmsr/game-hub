import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom"
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTraier from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Box padding={5}>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
        <GameTraier gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Box>
    </>

  )
}

export default GameDetailPage;
