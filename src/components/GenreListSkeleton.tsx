import { HStack, List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <List>{[...Array(20).keys()].map(item =>
      <ListItem key={item} paddingY={1}>
        <HStack>
          <Skeleton height="32px" width="32px" />
          <SkeletonText noOfLines={2} width="100px" />
        </HStack>
      </ListItem>
    )}
    </List>
  )
}

export default GenreListSkeleton;
