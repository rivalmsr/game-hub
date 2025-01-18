import { Button, Heading, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenreId?: number,
  onSelectGenre: (genre: number) => void
}

function GenreList({ selectedGenreId, onSelectGenre }: Props) {
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
            <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenreId ? "bold" : "normal"} fontSize="lg" variant="link" onClick={() => onSelectGenre(genre.id)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      )}
      </List>
    </>
  )
}

export default GenreList;
