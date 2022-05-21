import {
	Box,
	VStack,
	HStack,
	Text,
	Heading,
	Image,
	Icon,
	Button
} from "native-base";

import {
	MaterialCommunityIcons
} from '@expo/vector-icons';

function HomeScreen() {
	const user = {
		avatar: "https://github.com/xSallus.png",
		name: "Sarô Senpai",
		bio: "AutoDevs vamos codar!"
	}

	return (
		<VStack
			py={10}
			px={2}
			width="full"
			height="full"
			bg="darkBlue.800"
		>
			<Box
				width="full"
				height={16}
				px={6}
				py={2}
			>
				<HStack width="full" space={4}>
					<Image
						size={45}
						borderRadius={8}
						source={{uri:user.avatar}}
						alt="User profile picture"
					/>
					<VStack flex={1}>
						<Heading color="blue.50">
							{user.name}
						</Heading>
						<Text color="gray.100">
							{user.bio}
						</Text>
					</VStack>
					<Button
						bg="red.500"
						p={3}
						borderRadius={8}
					>
						<Icon
							as={MaterialCommunityIcons}
							name="plus"
							color="blue.50"
							size="lg"
						/>
					</Button>
				</HStack>
			</Box>
			<Box></Box>
		</VStack>
	)
}

export default HomeScreen;
