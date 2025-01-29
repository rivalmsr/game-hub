import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "../components/DefinitionItem";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem title="Platforms">
        {game.parent_platforms.map(({ platform }) => <Text key={platform.id}>{platform.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem title="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem title="Genres">
        {game.genres.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem title="Publishers">
        {game.publishers.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}
      </DefinitionItem>
    </SimpleGrid>
  )
}

export default GameAttributes;
