import React from "react";

import {
	Box,
	Text,
	Image,
	VStack,
	HStack,
	Divider,
	FlatList,
} from "native-base";

import { MatchCard } from "./match-card";
import { useMatch } from "../hooks/useMatch";
import { IMatch } from "../custom-types.d";

/*type IMatch = {
	id: string;
	name: string;
	icon: string;
	date: string;
}

const matches = [ 
	{
		name:"Duel",
		id:"duel",
		icon:"https://raw.githubusercontent.com/xSallus/nlw-6-gameplay/main/assets/duel.png",
		date: "21/05/2022"
	},
	{
		name:"Fun",
		id:"fun",
		icon:"https://raw.githubusercontent.com/xSallus/nlw-6-gameplay/main/assets/fun.png",
		date: "21/05/2022"
	},
	{
		name:"Ranked",
		id:"ranked",
		icon:"https://raw.githubusercontent.com/xSallus/nlw-6-gameplay/main/assets/ranked.png",
		date: "21/05/2022"
	},
	{
		name:"Console",
		id:"console",
		icon:"https://raw.githubusercontent.com/xSallus/nlw-6-gameplay/main/assets/console.png",
		date: "21/05/2022"
	}
]*/

const extractKey = (match: IMatch) => match.id

const renderMatch = (match: IMatch) => (
	<MatchCard match={match} />
)

export function Matches() {
	const { matches } = useMatch()

	return (
		<VStack
			width="full"
			flex={1}
			my={6}
			pr={2}
		>
			<HStack
				width="full"
				justifyContent="space-between"
				py={2}
				px={4}
			>
				<Text color="blue.50">Scheduled matches</Text>
				<Text color="blue.50">
					{`Total ${matches.length ?? 0}`}
				</Text>  
			</HStack>

			<FlatList
				width="full"
				height="full"
				ItemSeparatorComponent={() => (
					<Divider
						width="70%"
						mr={0}
						ml="auto"
						bg="darkBlue.700"
						borderRadius={10}
					/>
				)}
				data={matches}
				renderItem={renderMatch}
				keyExtractor={extractKey}
			/>
		</VStack>
	)
}
