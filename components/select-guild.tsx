import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
	Text,
	Icon,
	HStack,
	VStack,
	Button,
	Heading
} from "native-base";

import {
	Feather,
	FontAwesome
} from "@expo/vector-icons";

import { GuildBadge } from "./guild-badge";
import { IGuild } from "../custom-types.d";

type Props = TouchableOpacityProps & {
	title:string;
	guild?: IGuild;
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
				space={6}
			>
				<GuildBadge guild={guild} /> 
				{ Object.entries(guild).length ? (
					<VStack
						width="55%"
						space={2}
					>
						<Heading
							color="blue.50"
							fontWeight={600}
							fontSize="md"         
						>
							{guild.name}
						</Heading>

						<Text
							color="gray.400"
							fontWeight={500}
							fontSize="sm"
						>
							{guild.game}
						</Text>
					</VStack>
				) : (
					<Text
						color="blue.50"
						fontWeight={600}
						fontSize="md"
						width="55%"
					>
						{title}
					</Text>
				)}
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
