import React from "react";

import {
	Box,
	Icon,
	Image
} from "native-base";

import {
	FontAwesome
} from "@expo/vector-icons";

import { IGuild } from "../custom-types.d";

interface Props {
	guild?: IGuild | null;
}

export function GuildBadge({ guild }: Props) {
	return (
		<>{
		guild.icon ? (
			<Image
				size={16}
				borderRadius={8}
				borderWidth={1}
				borderColor="darkBlue.400"
				source={{ uri: guild.icon }}
				alignSelf="center"
				alt={
					guild.name.split(' ').join('_') ||
					'none_selected'
				}
			/>
		) : (
			<Box
				borderColor="darkBlue.400"
				justifyContent="center"
				alignItems="center"
				bg="darkBlue.700"
				borderRadius={8}
				borderWidth={1}
				size={16}
			>
				<Icon
					as={FontAwesome}
					name="group"
					size={12}
					color="blue.50"
				/>
			</Box>
		)}
		</>
	)
}
