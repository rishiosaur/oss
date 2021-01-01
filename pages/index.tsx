/* eslint-disable global-require */
import {
	Avatar,
	Badge,
	Box,
	Flex,
	Grid,
	Heading,
	HStack,
	IconButton,
	Image,
	Link,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/react'
import { Github, Instagram, Twitter } from '@icons-pack/react-simple-icons'
import { motion } from 'framer-motion'
export interface Profile {
	name: string
	github?: string
	twitter?: string
	insta?: string
	description: string
	profileUrl: string
}

const MotionStack = motion.custom(Stack)
const MotionGrid = motion.custom(Grid)

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
			<MotionGrid
				variants={{
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: {
							staggerChildren: 0.1,
							// delayChildren: 1,
						},
					},
				}}
				initial="hidden"
				animate="show"
				templateColumns="repeat(auto-fit, 30rem)"
				templateRows="repeat(auto-fit, 12rem)"
				gap={3}>
				{profiles.map((profile) => (
					<MotionStack
						variants={{
							hidden: { opacity: 0, rotateX: 50 },
							show: {
								opacity: 1,
								rotateX: 0,
							},
						}}
						p="6"
						// initial="hidden"
						// animate="show"
						borderWidth="1px"
						borderRadius="lg">
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
											<IconButton
												colorScheme="gray"
												aria-label="Github button"
												size="lg"
												icon={<Github />}
											/>
										</Link>
									)}

									{profile.twitter && (
										<Link href={`https://github.com/${profile.twitter}`}>
											<IconButton
												colorScheme="blue"
												aria-label="Twitter button"
												size="lg"
												icon={<Twitter />}
											/>
										</Link>
									)}

									{profile.insta && (
										<Link href={`https://instagram.com/${profile.insta}`}>
											<IconButton
												colorScheme="orange"
												aria-label="Instagram button"
												size="lg"
												icon={<Instagram />}
											/>
										</Link>
									)}
								</HStack>
							</Stack>
						</HStack>
					</MotionStack>
				))}
			</MotionGrid>
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
