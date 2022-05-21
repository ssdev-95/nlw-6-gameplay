import React from "react";

import {
	Box,
	Text,
	Image,
	VStack,
	FlatList,
} from "native-base";

import { MatchCard } from "./match-card";

type IMatch = {
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
]

const extractKey = (match: IMatch) => match.id

const renderMatch = (match: IMatch) => (
	<MatchCard match={match} />
)

export function Matches() {
	return (
		<VStack
			width="full"
			flex={1}
			my={8}
			pr={2}
		>
			<FlatList
				width="full"
				height="full"
				data={matches}
				renderItem={renderMatch}
				keyExtractor={extractKey}
			/>
		</VStack>
	)
}
