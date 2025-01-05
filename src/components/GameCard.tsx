import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface GameCard {
  name: string;
  image: string;
}

function GameCard({ name, image }: GameCard) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={image} alt={name} />
      <CardBody>
        <Heading as="h3" size="lg">
          {name}
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard;
