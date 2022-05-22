import React, {
	ChangeEvent,
	FormEvent
} from "react";

import {
	Text,
	Input,
	Button,
	VStack,
	HStack,
	Select,
	TextArea,
	FormControl
} from "native-base";

type FormProps = {
	onChange?: (event:ChangeEvent)=>void;
	onSubmit?: (event:any)=>void;
	value?: any;
}

export function Form({
	onChange, onSubmit, value
}: FormProps) {
	return (
		<VStack>
			<TextArea
				onChangeText={onChange}
				defaultValue={value}
			/>
			<Button
				colorScheme="red"
				borderRadius={8}
				width={250}
				onPress={onSubmit}
			>
				SCHEDULE
			</Button>
		</VStack>
	)
}
