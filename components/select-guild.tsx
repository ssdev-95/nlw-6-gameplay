import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
	Text,
	Icon,
	HStack,
	Button
} from "native-base";

import {
	Feather,
	FontAwesome
} from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
	title:string;
	guild?: any;
}

export function SelectGuild({
	title, guild, ...rest
}:Props) {
	return(
		<Button
			bg="darkBlue.700"
			pr={2}
			pl={0}
			height={16}
			borderColor="darkBlue.400"
			borderWidth={1}
			borderRadius={8}
			width={375}
			mx="auto"
			_pressed={{
				bg:"darkBlue.600",
				opacity: 0.68
			}}
			{...rest}
		>
			<HStack
				alignItems="center"
				width="full"
				justifyContent="space-between"
				space={4}
			>
				<Icon
					as={FontAwesome}
					name="group"
					color="blue.200"
					bg="darkBlue.700"
					borderColor="darkBlue.400"
					borderWidth={1}
					borderRadius={8}
					size={16}
					p={1}
				/>
				<Text
					color="blue.50"
					fontWeight={600}
					fontSize="md"
					width="55%"
				>{title}</Text>
				<Icon
					as={Feather}
					name="chevron-right"
					color="blue.50"
					size={8}
				/>
			</HStack>
		</Button>
	)
}
