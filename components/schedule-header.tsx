import React, { ReactNode } from "react";
import {
	Box,
	Text,
	Icon,
	HStack,
	IconButton
} from "native-base";

import {
	MaterialCommunityIcons
} from '@expo/vector-icons';

type HeaderProps = {
	title: string;
	action?: ReactNode;
	goBack: ()=>void;
}

export function Header({
	title, goBack, action
}: HeaderProps) {
	return (
		<Box
			width="full"
			px={8}
		>
			<HStack
				justifyContent={
					action ?
					"space-between" :
					"center"
				}
				alignItems="center"
				width="full"
			>
				<IconButton
					onPress={goBack}
					size={8}
					bg="transparent"
					_pressed={{
						bg: "transparent",
						opacity: 0.68
					}}
					ml={0}
					mr={
						action ?
						0 :
						"auto"
					}
					icon={
						<Icon
							as={MaterialCommunityIcons}
							name="arrow-left"
							color="blue.50"
							size={8}
						/>
					}
				/>
				<Text
					color="blue.50"
					mt={
						title === "Schedule" ?
						0 :
						-2
					}
					mr="auto"
					ml={
						action ?
						"auto" :
						0
					}
					fontSize={24}
				>{title}</Text>
				{action && action}
			</HStack>
		</Box>
	);
}
