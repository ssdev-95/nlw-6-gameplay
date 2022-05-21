import React from "react";

import {
	Box,
	Text,
	Image,
	Center,
	HStack,
	VStack
} from "native-base";

export function MatchCard({ match }: any) {
	return (
		<Box
			width="full"
			bg="rgba(0,0,0,0.28)"
			height={20}
			m={2}
			borderRadius={8}
			px={6}
			py={2}
		>
			<Center h="full" w="full">
				<HStack space={4}>
					<Image
						source={{uri:match.item.icon}}
						size={12}
						alt={`${match.item.name} icon`}
					/>
					<VStack space={2} flex={1}>
						<Text
							color="blue.50"
							fontSize={18}
						>
							{match.item.name}
						</Text>
						<Text
							color="blue.200"
							fontSize={12}
						>
							{match.item.date}
						</Text>
					</VStack>
				</HStack>
			</Center>
		</Box>
	);
}
