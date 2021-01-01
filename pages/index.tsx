/* eslint-disable global-require */
import {
	Avatar,
	Badge,
	Box,
	Flex,
	Grid,
	Heading,
	HStack,
	Image,
	Link,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/react'
import { AtSignIcon } from '@chakra-ui/icons'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

export interface Profile {
	name: string
	github?: string
	twitter?: string
	description: string
	profileUrl: string
}

const Home = ({ profiles }: { profiles: Profile[] }) => (
	<>
		<Box
			paddingTop={['5', '5', '5', '5rem']}
			paddingX={['4', '4', '4', '20rem']}>
			<Box marginBottom="7">
				<Heading>Hello!</Heading>
				<Text>
					Profiles from the Hack the North 2020 Open Source Workshop! 💻 👥 🚀
					⚡️
				</Text>
			</Box>
			<Grid
				templateColumns="repeat(auto-fit, 30rem)"
				templateRows="repeat(auto-fit, 12rem)"
				gap={3}>
				{profiles.map((profile) => (
					<Stack p="6" borderWidth="1px" borderRadius="lg">
						<HStack>
							<Avatar size="2xl" name={profile.name} src={profile.profileUrl} />
							<Spacer />
							<Stack>
								<Text
									mt="1"
									fontWeight="semibold"
									as="h4"
									lineHeight="tight"
									isTruncated>
									{profile.name}
								</Text>
								<Text>{profile.description}</Text>
								<HStack>
									{profile.github && (
										<Link href={`https://github.com/${profile.github}`}>
											<Box
												borderRadius="md"
												bgColor="white"
												color="black"
												p="2">
												GitHub
											</Box>
										</Link>
									)}

									{profile.twitter && (
										<Link
											color="white"
											_hover={{
												textDecoration: 'none',
											}}
											href={`https://twitter.com/${profile.twitter}`}>
											{/* <Box borderRadius="md" bgColor="blue" p="2">
										Twitter
									</Box> */}
											<Box
												borderRadius="md"
												bgColor=" #0366d6"
												color="white"
												p="2">
												@{profile.twitter}
											</Box>
										</Link>
									)}
								</HStack>
							</Stack>
						</HStack>
					</Stack>
				))}
			</Grid>
		</Box>
	</>
)

export default Home

export const getServerSideProps = () => {
	const profiles = require('../profiles.json')

	return {
		props: {
			profiles,
		},
	}
}
