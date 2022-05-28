import React, { useEffect } from "react";

import {
	Flex,
	Image,
	Heading,
	Text,
	VStack,
	HStack
} from "native-base";

import Animated, { FadeIn } from "react-native-reanimated";

import {
	MaterialCommunityIcons
} from "@expo/vector-icons";

import {
	DiscordButton
} from "../components/discord-button";

import { Background } from "../components/background";
import { useAuth } from "../hooks/useAuth";
function LoginScreen({ navigation }: any) {
	const { signIn } = useAuth()

	return (
	<Background>
		<Animated.View
			entering={FadeIn.duration(1000)}
			style={{
				width:"100%",
				height:"100%",
				paddingTop: 30
			}}
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
					color="gray.400"
					fontSize={16}
					textAlign="center"
				>
					Create groups and join with you friend to play {'\n'}
					your favorite games.
				</Text>
				<DiscordButton
					title="Login with Discord"
					onPress={signIn}
				/>
			</VStack>
		</Animated.View>
	</Background>
	);
}

export default LoginScreen;
