import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

const App = ({ Component, pageProps }) => (
	<AnimatePresence>
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	</AnimatePresence>
)

export default App
