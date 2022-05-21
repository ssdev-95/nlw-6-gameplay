import React from "react";

import {
	Box,
	Text,
	Image,
	Center,
	Button,
	HStack
} from "native-base";

export function CategoryCard({ category }: any) {
  function handlePress() {
		console.log(category)
	}

	return (
		<Button
			width={32}
			height={32}
			bg="rgba(0,0,0,0.28)"
			mx={2}
			borderRadius={8}
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
