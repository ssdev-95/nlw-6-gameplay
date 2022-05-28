import React from "react";

import {
	Icon,
	Text,
	IconButton,
	HStack,
	Divider,
	IconButtonProps
} from "native-base";

import {
	MaterialCommunityIcons
} from "@expo/vector-icons";

import Animated, {
	SlideInDown
} from "react-native-reanimated";

type DiscordButtonProps = {
	title:string;
	onPress?: ()=>void;
	bg?: string;
}

export function DiscordButton({
	bg,
	title,
	onPress
}: DiscordButtonProps) {
	return (
	<Animated.View
		entering={SlideInDown.duration(1000)}
	>
		<IconButton
			bg={bg ? bg : "red.800"}
			borderRadius={8}
			width={275}
			height={12}
			onPress={onPress}
			mx="auto"
			_pressed={{
				bg: bg ? bg : "red.800",
				opacity: 0.68
			}}
			icon={
				<HStack	
					width="full"
					height="full"
					alignItems="center"
					justifyContent="flex-start"
				>
					<Icon
						as={MaterialCommunityIcons}
						name="discord"
						color="blue.50"
						size={10}
					/>
					<Text
						color="blue.50"
						fontSize={18}
						mt={-1}
						mx="auto"
					>
						{title}
					</Text>
				</HStack>
			}
		/>
	</Animated.View>
	)
}
