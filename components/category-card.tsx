import React from "react";

import {
	Box,
	Text,
	Image,
	Center,
	Button,
	HStack,
	Divider
} from "native-base";

import { useMatch } from "../hooks/useMatch";
import { ICategory } from "../custom-types.d";

interface CategoryProps {
	category:ICategory;
	type:string;
}

export function CategoryCard({
	category, type
}: CategoryProps) {
	const { selected, selectCategory } = useMatch()

  function handlePress() {
		selectCategory(category.name)
	}

	return (
		<Button
			width={32}
			height={32}
			position="relative"
			bg={
				selected === category.name ?
				"darkBlue.500" :
				"darkBlue.700"
			}
			borderColor="darkBlue.500"
			borderWidth={1}
			mx={2}
			borderRadius={8}
			_pressed={{
				opacity: 0.48,
				bg: (
					selected === category.name ?
					"darkBlue.500" :
					"darkBlue.700"
					)
			}}
			onPress={handlePress}
		>
			<Center height={100} width={100}>
				{type === "schedule" && (
					<Divider
						size={2}
						position="absolute"
						top={-1}
						right={-1}
						bg={
							selected === category.name ?
							"red.700" :
							"gray.600"
						}
						borderRadius={12}
					/>
				)}
				<Image
					source={{uri:category.icon}}
					size={12}
					alt={`${category.name} icon`}
				/>
			
				<Text
					color="blue.50"
					fontSize={24}
					mt={2}
				>
					{category.name}
				</Text>
			</Center>
		</Button>
	);
}
