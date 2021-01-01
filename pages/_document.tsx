import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					{/* <ColorModeScript initialColorMode="dark" /> */}
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
