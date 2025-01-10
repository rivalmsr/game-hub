import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenre: Genre | null,
  onSelectGenre: (genre: Genre) => void
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, loading, error } = useGenres();

  if (error) return null;

  if (loading) return <GenreListSkeleton />

  return (
    <List>{data.map(genre =>
      <ListItem key={genre.id} paddingY={1}>
        <HStack>
          <Image boxSize="32px" src={getCroppedImageUrl(genre.image_background)} borderRadius={8} />
          <Button fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} fontSize="lg" variant="link" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
        </HStack>
      </ListItem>
    )}
    </List>
  )
}

export default GenreList;
