import React from "react";

import {
	Button,
	Text,
	Icon,
	Image,
	Center,
	HStack,
	VStack,
	ButtonProps
} from "native-base";

import {
	MaterialCommunityIcons
} from '@expo/vector-icons';

import { IMatch } from "../custom-types.d";


/*{ 
id: string;
subject: string;               //title                
squad: Omit<ISquad, "players"> //players group
players_count: number;         //default is 1
date: string;                  //match date
category: string;
created_by: string;
}*/


type MatchCardProps = ButtonProps & {
	match: IMatch
}

export function MatchCard({
	match, ...rest
}: MatchCardProps) {
	return (
		<Button
			bg="transparent"
			_pressed={{
				bg: "transparent",
				borderWidth: 1,
				borderColor: "darkBlue.500"
			}}
			width="full"
			height={24}
			my={2}
			borderRadius={8}
			px={6}
			{...rest}
		>
			<HStack
				height="full"
				width="full"
				space={1}
			>
				{match.squad.badge ? (
					<Image
					  source={{uri:match.squad.badge}}
						size={16}
						borderRadius={8}
						mx={2}
						my="auto"
						alt={match.id}
					/>
				) : (
					<Icon
						as={MaterialCommunityIcons}
						name="lock"
						color="red.700"
						size={16}
						mx={2}
						my="auto"
					/>
				)}
				<VStack
					height="full"
					width="90%"
					justifyContent="space-evenly"
				>
					<HStack
						width="full"
						alignItems="center"
					>
						<Text
							color="blue.50"
							fontSize={24}
						>
							{match.squad.name}
						</Text>
						<Text
							color="blue.200"
							ml="14%"
						>
							{match.category}
						</Text>
					</HStack>

					<Text color="blue.200">
						{match.subject}
					</Text>

					<HStack
						width="full"
						alignItems="center"
					>
						<HStack space={2}>
						<Icon
							as={MaterialCommunityIcons}
							name="calendar-blank"
							color="red.700"
							size={5}
						/>
						<Text color="blue.50">
							{match.date}
						</Text>
						</HStack>
						<HStack
							ml="20%"
							alignItems="center"
							space={2}
						>
						<Icon
							as={MaterialCommunityIcons}
							name="account"
							color="red.700"
							size={5}
					  />
						<Text
							color="blue.50"
							fontSize={16}
						>
							{match.players_count}
						</Text>
						</HStack>
					</HStack>
				</VStack>
			</HStack>
		</Button>
	);
}
