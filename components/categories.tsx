import React from "react";

import {
	Box,
	Text,
	Image,
	HStack,
	FlatList,
} from "native-base";

import { CategoryCard } from "./category-card";

type ICategory = {
	id: string;
	name: string;
	icon: string;
}

const categories = [ 
	{
		name:"Duel",
		id:"duel",
		icon:"https://raw.githubusercontent.com/xSallus/nlw-6-gameplay/main/assets/duel.png"
	},
	{
		name:"Fun",
		id:"fun",
		icon:"https://raw.githubusercontent.com/xSallus/nlw-6-gameplay/main/assets/fun.png"
	},
	{
		name:"Ranked",
		id:"ranked",
		icon:"https://raw.githubusercontent.com/xSallus/nlw-6-gameplay/main/assets/ranked.png"
	},
	{
		name:"Console",
		id:"console",
		icon:"https://raw.githubusercontent.com/xSallus/nlw-6-gameplay/main/assets/console.png"
	}
]

const extractKey = (category: ICategory) => category.id

const renderCategory = (category: ICategory) => (
	<CategoryCard category={category}	/>
)

export function Categories() {
	return (
		<HStack width="full" my={8} py={2} >
			<FlatList
				width="full"
				height={32}
				horizontal
				data={categories}
				renderItem={renderCategory}
				keyExtractor={extractKey}
			/>
		</HStack>
	)
}
