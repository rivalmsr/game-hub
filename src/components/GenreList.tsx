import { Button, Heading, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenre: Genre | null,
  onSelectGenre: (genre: Genre) => void
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <GenreListSkeleton />

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>Genres</Heading>
      <List>{data?.results.map(genre =>
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image boxSize="32px" objectFit="cover" src={getCroppedImageUrl(genre.image_background)} borderRadius={8} />
            <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} fontSize="lg" variant="link" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      )}
      </List>
    </>
  )
}

export default GenreList;
