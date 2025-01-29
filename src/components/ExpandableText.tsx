import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxLenght?: number;
}

function ExpandableText({ children, maxLenght = 300 }: Props) {
  const [expandabled, setExpandabled] = useState<boolean>(false);

  if (!children) return null;

  if (children.length <= maxLenght) return <Text>{children}</Text>;

  const summary = expandabled ? children : children.slice(0, maxLenght).trimEnd() + '...';

  return (
    <Text>
      {summary}
      <Button marginLeft={1} colorScheme='yellow' fontWeight="bold" size='xs' onClick={() => setExpandabled(!expandabled)}>
        {expandabled ? 'Less then' : 'Read more'}
      </Button>
    </Text>

  )
}

export default ExpandableText;
