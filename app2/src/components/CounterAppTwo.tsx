import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>APP-2</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </Button>
    </Flex>
  );
};

export default Counter;
