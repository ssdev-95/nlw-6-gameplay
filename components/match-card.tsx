import React from "react";

import {
	Button,
	Text,
	Icon,
	Center,
	HStack,
	VStack,
	Divider,
	Heading,
	ButtonProps
} from "native-base";

import {
	MaterialCommunityIcons
} from "@expo/vector-icons";

import { GuildBadge } from "./guild-badge";
import { AnimatedCard } from "./animated-card-basis";
import { IMatch } from "../custom-types.d";

type MatchCardProps = ButtonProps & {
	match: IMatch
}

export function MatchCard({
	match, ...rest
}: MatchCardProps) {
	return (
		<AnimatedCard>
		<Button
			bg="transparent"
			_pressed={{
				bg: "darkBlue.700",
				borderWidth: 1,
				borderColor: "darkBlue.500"
			}}
			width="full"
			height={24}
			my={2}
			borderRadius={8}
			borderColor="darkBlue.500"
			borderWidth={1}
			px={3}
			{...rest}
			justifyContent="flex-start"
			bg="transparent"
		>
			<HStack
				ml={0}
				space={4}
			>
				<GuildBadge guild={match.guild} />
				<VStack
					maxWidth="full"
					height="full"
					space={4}
				>
					<Heading
						color="blue.50"
						fontSize={24}
					>
						{match.guild.name}
					</Heading>
					<HStack
						space={2}
						alignItems="center"
					>
						<Icon
							as={MaterialCommunityIcons}
							name="calendar-blank"
							color="darkBlue.100"
							size={4}
						/>
						<Text
							color="darkBlue.100"
							fontSize={16}
						>
							{match.date}
						</Text>
					</HStack>
				</VStack>
				<VStack
					maxWidth="full"
					height="full"
					space={4}
					ml="12%"
					alignItems="center"
				>
					<Text
						textAlign="right"
						fontSize={18}
						color="gray.400"
					>
						{match.category}
					</Text>
					<Text
						fomtSize={16}
						mt={1}
						color={
							match.guild.owner ?
							"green.700" :
							"gray.500"
						}
					>
						<Divider
							size={2}
							borderRadius={8}
							pr={4}
							bg={
								match.guild.owner ?
								"green.700" :
								"gray.500"
							}
						/>
						{
							match.guild.owner ?
							" Ademiro" :
							" Guest"
						}
					</Text>
				</VStack>
			</HStack>
		</Button>
		</AnimatedCard>
	);
}
