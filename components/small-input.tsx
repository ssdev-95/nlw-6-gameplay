import React from "react";

import { TextInputProps } from "react-native";

import {
	Input
} from "native-base";

export function SmInput(props: TextInputProps) {
	return (
		<Input
			maxLength={2}
			keyboardType="numeric"
			height={16}
			width={16}
			borderRadius={8}
			borderColor="darkBlue.700"
			bg="darkBlue.700"
			fontSize="lg"
			color="blue.50"
			textAlign="center"
			_focus={{
			 borderColor:"darkBlue.500",
			 opacity: 0.8
			}}
			{...props}
		/>
	)
}
