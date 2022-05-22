import React, { useEffect } from "react";

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

import {
	storeData
} from "../services/storage";

import { useAuth } from "../hooks/useAuth";
import { useMatch } from "../hooks/useMatch";

import { matches as mockedData } from "../mock.json";
function LoginScreen({ navigation }: any) {
	const { signIn, user } = useAuth()
	const { key } = useMatch()

	function goHome() {
		navigation.navigate('Home')
	}

	useEffect(() => {
		if(Object.entries(user).length) {
			storeData(
				key,
				JSON.stringify(mockedData)
			)
			goHome()
		}
	}, [user])

	return (
		<Flex
			width="full"
			height="full"
			bg="gameplay.background"
		>
			<Image
				source={require("../assets/illustration.png")}
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
					fontSize={38}
					color="blue.50"
					textAlign="center"
				>
					Connect {'\n'}
					and organize your {'\n'}
					play matches!
				</Heading>
				<Text
					color="blue.50"
					fontSize={16}
					textAlign="center"
				>
					Create groups and join with you friend to play {'\n'}
					your favorite games.
				</Text>
				<Button
					colorScheme="red"
					borderRadius={8}
					width={210}
					mx="auto"
					onPress={signIn}
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
