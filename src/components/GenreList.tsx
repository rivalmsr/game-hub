import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import { getCroppedImageUrl } from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

function GenreList() {
  const { data, loading, error } = useGenres();

  if (error) return null;

  if (loading) return <GenreListSkeleton />

  return (
    <List>{data.map(genre =>
      <ListItem key={genre.id} paddingY={1}>
        <HStack>
          <Image boxSize="32px" src={getCroppedImageUrl(genre.image_background)} borderRadius={8} />
          <Text fontSize="lg">{genre.name}</Text>
        </HStack>
      </ListItem>
    )}
    </List>
  )
}

export default GenreList;
