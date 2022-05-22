import React from "react";

import {
	Icon,
	Text,
	IconButton,
	HStack,
	Divider
} from "native-base";

import {
	MaterialCommunityIcons
} from "@expo/vector-icons";

type DiscordButtonProps = {
	title:string;
	onPress:()=>void;
}

export function DiscordButton({
	title,
	onPress
}: DiscordButtonProps) {
	return (
		<IconButton
			bg="red.800"
			borderRadius={8}
			width={275}
			height={12}
			onPress={onPress}
			mx="auto"
			_pressed={{
				bg: "red.500",
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
	)
}
