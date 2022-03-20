import { Text, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>APP-1</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </Flex>
  );
};

export default Counter;
