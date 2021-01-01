import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component, pageProps }) => (
	<ChakraProvider>
		<Component {...pageProps} />
	</ChakraProvider>
)

export default App
