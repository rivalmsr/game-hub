import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function Segment({ title, children }: Props) {
  return (
    <Box marginY={5}>
      <Heading as="dt" textColor="gray.600" size="md">{title}</Heading>
      <dd>
        {children}
      </dd>
    </Box>
  )
}

export default Segment;
