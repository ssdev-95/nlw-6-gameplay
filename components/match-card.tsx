import React from "react";

import {
	Box,
	Text,
	Icon,
	Image,
	Center,
	HStack,
	VStack
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


type MatchCardProps = {
	match: {
		item: IMatch
	}
}

export function MatchCard({ match }: MatchCardProps) {
	return (
		<Box
			width="full"
			height={32}
			m={2}
			borderRadius={8}
			px={6}
		>
			<Center h="full" w="full">
				<HStack space={4}>
					{ match.item.squad.badge ? (
					<Image
						source={{uri:match.item.squad.badge}}
						size={12}
						alt={`${match.item.id} icon`}
					/>
					) : (
						<Icon
							as={MaterialCommunityIcons}
							name="lock-question"
							size={16}
							color="red.500"
						/>
					)}
					<VStack space={2} flex={1}>
						<HStack w="full" alignItems="center">
							<Text
								color="blue.50"
								fontSize={18}
							>
								{match.item.squad.name}
							</Text>
							<Text color="blue.200" ml="auto">
								{match.item.category}
							</Text>
					  </HStack>

						<Text color="blue.200">
							{match.item.subject}
						</Text>

						<HStack
							w="full"
							height={8}
							alignItems="center"
						>
							<Text
								color="blue.50"
								fontSize={16}
							>
								<Icon
									as={MaterialCommunityIcons}
									name="calendar-blank"
									size={4}
									ml={8}
									color="red.500"
								/>
								{match.item.date}
							</Text>
							<Text
								ml="auto"
								color="blue.50"
								fontSize={16}
							>
								<Icon
									as={MaterialCommunityIcons}
									name="account"
									size={4}
									ml={8}
									color="red.500"
								/>
								{match.item.players_count}
							</Text>
						</HStack>
					</VStack>
				</HStack>
			</Center>
		</Box>
	);
}
