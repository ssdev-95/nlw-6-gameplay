import React, {
	ChangeEvent,
	FormEvent
} from "react";

import {
	Icon,
	Text,
	Input,
	Button,
	VStack,
	HStack,
	Select,
	TextArea,
	FormControl
} from "native-base";

import {
	MaterialCommunityIcons
} from "@expo/vector-icons";

type FormProps = {
	onChange?: (event:ChangeEvent)=>void;
	onSubmit?: (event:any)=>void;
	value?: any;
}

export function Form({
	onChange, onSubmit, value
}: FormProps) {
	function submit() {
		alert("lol")
	}
	return (
		<VStack
			width="full"
			pt={2}
			pb={6}
			px={2}
			height="full"
			space={4}
		>
			<Select
				bg="transparent"
				defaultValue="choose"
				color="blue.50"
			>
				<Select.Item
					isDisabled
					label="Squads"
					value="choose"
				/>
				<Select.Item
					value="valorant"
					label={<Icon
						as={MaterialCommunityIcons}
						name="lock"
						size={12}
						color="red.700"
					/>}
				/>
			</Select>

			<HStack
				width="75%"
				space={2}
			>
				<FormControl width="full">
					<FormControl.Label>
						Day and month
					</FormControl.Label>
					<HStack width={30} alignItems="center">
						<Input type="number" min={1} max={31} />
						<Text color="blue.200" mx={3}>{"/"}</Text>
						<Input type="number" min={1} max={12} />
					</HStack>
				</FormControl>
				<FormControl width="full">
					<FormControl.Label>
						Time
					</FormControl.Label>
					<HStack width={30} alignItems="center">
						<Input type="number" min={0} max={23} />
						<Text color="blue.200" mx={3}>{":"}</Text>
						<Input type="number" min={0} max={59} />
					</HStack>
				</FormControl>
			</HStack>

			<FormControl
				width="full"
				justifyContent="space-between"
			>
				<HStack>
					<FormControl.Label color="blue.100">
						Decription
					</FormControl.Label>

					<FormControl.Label color="gray.400" ml="auto">
						Max 100 characters
					</FormControl.Label>
				</HStack>
				<TextArea
					onChangeText={onChange}
					defaultValue={value}
					max={100}
				/>
			</FormControl>
			<Button
				colorScheme="red"
				borderRadius={8}
				width={250}
				mx="auto"
				onPress={submit}
			>
				SCHEDULE
			</Button>
		</VStack>
	)
}
