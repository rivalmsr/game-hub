import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 70 ? 'green' : score > 60 ? 'yellow' : 'red';

  return (
    <Badge colorScheme={color} fontSize="12px" paddingX={2}>{score}</Badge>
  )
}

export default CriticScore;
