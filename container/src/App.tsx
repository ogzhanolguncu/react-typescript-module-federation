import { Box, Center, Flex, Heading, Spinner } from "@chakra-ui/react";
import React from "react";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));
var version = "[AIV]{version}[/AIV]";

export default () => (
	<Center height="100vh" width="100%" backgroundColor="#1B1A29" margin="0" p="0">
		<span>{version}</span>
		<React.Suspense fallback={<Spinner size="xl" />}>
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
					</Box>
					<Box p="2rem" border="1px solid #aeaeae" borderRadius="1rem" backgroundColor="#fff">
						<Heading color="#6F60EA" mb="1rem">
							APP-2
						</Heading>
						<CounterAppTwo />
					</Box>
				</Flex>
			</Flex>
		</React.Suspense>
	</Center>
);
