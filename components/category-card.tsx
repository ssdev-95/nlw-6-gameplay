import React, {
	useMemo
} from "react";

import {
	Box,
	Text,
	Image,
	Center,
	Button,
	HStack
} from "native-base";

import { useMatch } from "../hooks/useMatch";

export function CategoryCard({ category }: any) {
	const { selectCategory, selected } = useMatch()

	const isSelected = useMemo(()=>{
		return (category === selected);
	},[selected])

  function handlePress() {
		selectCategory(category.item.name)
	}

	return (
		<Button
			width={32}
			height={32}
			bg={
				isSelected ?
				"tomato.700" :
				"darkBlue.700"
			}
			borderColor={
				isSelected ?
				"red.500" :
				"darkBlue.500"
			}
			borderWidth={1}
			mx={2}
			borderRadius={8}
			_pressed={{ bg: "darkBlue.500" }}
			onPress={handlePress}
		>
			<Center h="full">
			<Image
				source={{uri:category.item.icon}}
				size={12}
				alt={`${category.item.name} icon`}
			/>
			
			<Text
				color="blue.50"
				fontSize={24}
				mt={2}
			>
				{category.item.name}
			</Text>
			</Center>
		</Button>
	);
}
