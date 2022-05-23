import React from "react";

import {
	Box,
	Text,
	Image,
	HStack,
	VStack,
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

type CategoriesProps = {
	type:string;
}

export function Categories({ type }) {

	const extractKey = (category: ICategory) => category.id

	const renderCategory = (category: ICategory) => (
		<CategoryCard
			category={category.item}
			type={type}
		/>
	)

	return (
		<VStack width="full" my={8} py={2} >
			{type === "schedule" && (
				<Text
					color="blue.300"
					fontSize="xl"
					ml={3}
				>
					Categories
				</Text>
			)}
			<HStack width="full" my={2} py={1} >
				<FlatList
					width="full"
					height={32}
					horizontal
					data={categories}
					renderItem={renderCategory}
					keyExtractor={extractKey}
				/>
			</HStack>
		</VStack>
	)
}
