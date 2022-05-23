import {
	Box,
	Icon,
	Text,
	Button,
	VStack
} from "native-base";

import {
	Header
} from "../components/schedule-header";

import {
	Categories
} from "../components/categories"

import { Form } from "../components/form";

function ScheduleMatch({ navigation }:any) {
	return (
		<VStack
			height="full"
			bg="gameplay.background"
			py={10}
			px={2}
		>
			<Header
				title="Schedule"
				goBack={()=>navigation.goBack()}
			/>

			<Categories
				type="schedule"
			/>
	
			<Form />
		</VStack>
	)
}

export default ScheduleMatch;
