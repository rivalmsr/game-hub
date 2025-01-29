import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data } = useScreenshots(gameId);
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={2}>
      {data?.results.map(screenshot => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  )
}

export default GameScreenshots;
