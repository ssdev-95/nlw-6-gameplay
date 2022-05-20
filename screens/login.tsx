import React from "react";

import {
	Flex,
	Image,
	Heading,
	Text,
	VStack,
	Button,
	Icon,
	HStack,
	Divider
} from "native-base";

import {
	MaterialCommunityIcons
} from '@expo/vector-icons';

/*
 * <MaterialCommunityIcons name="discord" size={24} color="black" />
*/

function LoginScreen() {
	return (
		<Flex
			width="full"
			height="full"
			bg="darkBlue.800"
		>
			<Image
				source={
					require("../assets/illustration.png")
				}
				width="full"
				alt="Gameplay icon"
			/>
			<VStack
				width="full"
				space={10}
				flex={1}
				py={10}

			>
				<Heading
					mx={12}
					fontSize={38}
					color="blue.50"
					textAlign="center"
				>
					Connect and organize you play matches!
				</Heading>
				<Text
					mx={12}
					color="blue.50"
					fontSize={16}
					textAlign="center"
				>
					Create groups and join with you friend to play your favorite games.
				</Text>
				<Button
					colorScheme="red"
					borderRadius={8}
					width={210}
					mx="auto"
				>
					<HStack width="full" space={6}>
						<Icon
							as={MaterialCommunityIcons}
							name="discord"
							color="blue.50"
							size={6}
						/>
						<Divider
							color="blue.50"
							orientation="vertical"
						/>
						<Text color="blue.50">
							Login with Discord
						</Text>
					</HStack>
				</Button>
			</VStack>
		</Flex>
	);
}

export default LoginScreen;
