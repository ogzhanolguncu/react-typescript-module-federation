import {
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  Image,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Routes, Route, Link as RouterLink } from "react-router-dom";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));
var version = process.env.BUILD_DATE;

const App = () => (
  <>
    <Routes>
      <Route
        path="/"
        element={
          <Center
            height="100vh"
            width="100%"
            backgroundColor="#1B1A29"
            margin="0"
            p="0"
            flexDirection="column"
          >
            <Box
              color="#fff"
              position="fixed"
              right="0"
              top="0"
              mr="2rem"
              mt="2rem"
            >
              Latest Build Date: <Text fontWeight="bold">{version}</Text>
            </Box>
            <Flex
              border="1px solid #151421"
              borderRadius="1rem"
              height="50vh"
              justifyContent="space-around"
              alignItems="center"
              flexDirection="column"
              padding="5rem"
              backgroundColor="#6F60EA"
            >
              <Heading color="#fff">CONTAINER</Heading>
              <Flex direction="row" justifyContent="space-around">
                <React.Suspense fallback={<Spinner size="xl" />}>
                  <Box
                    p="2rem"
                    mr="2rem"
                    border="1px solid #aeaeae"
                    borderRadius="1rem"
                    backgroundColor="#fff"
                  >
                    <Heading color="#6F60EA" mb="1rem">
                      APP-1
                    </Heading>
                    <CounterAppOne />
                    <Button mt="1rem" w="100%" to="/app1" as={RouterLink}>
                      To App1
                    </Button>
                  </Box>
                </React.Suspense>
                <React.Suspense fallback={<Spinner size="xl" />}>
                  <Box
                    p="2rem"
                    border="1px solid #aeaeae"
                    borderRadius="1rem"
                    backgroundColor="#fff"
                  >
                    <Heading color="#6F60EA" mb="1rem">
                      APP-2
                    </Heading>
                    <CounterAppTwo />
                    <Button
                      mt="1rem"
                      w="100%"
                      alignSelf="center"
                      to="/app2"
                      as={RouterLink}
                    >
                      To App2
                    </Button>
                  </Box>
                </React.Suspense>
              </Flex>
            </Flex>
            <Link
              marginTop="5rem"
              href="https://github.com/ogzhanolguncu/react-typescript-module-federation"
              target="_blank"
            >
              <Image src="./git.png" height="45px" width="45px" />
            </Link>
          </Center>
        }
      />
      <Route path="app1/*" element={<CounterAppOne />} />
      <Route path="app2/*" element={<CounterAppTwo />} />
    </Routes>
  </>
);

export default App;
