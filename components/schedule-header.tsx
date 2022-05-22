import React, { ReactNode } from "react";
import {
	Box,
	Text,
	Icon,
	HStack,
	Button
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
				<Button
					onPress={goBack}
					size={8}
					bg="transparent"
					_pressed={{
						bg: "transparent"
					}}
					ml={0}
					mr={
						action ?
						0 :
						"auto"
					}
				>
					<Icon
						as={MaterialCommunityIcons}
						name="arrow-left"
						color="blue.50"
						size={8}
					/>
				</Button>
				<Text
					color="blue.50"
					mr="auto"
					ml={
						action ?
						"auto" :
						0
					}
					fontSize={28}
				>{title}</Text>
				{action && action}
			</HStack>
		</Box>
	);
}
