import { Box } from "@chakra-ui/react";
import React from "react";
import CounterAppOne from "./components/CounterAppOne";

const App = () => (
	<Box margin="1.2rem">
		<div>APP-1</div>
		<div>
			<CounterAppOne />
		</div>
	</Box>
);

export default App;
