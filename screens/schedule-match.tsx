import {
	Box,
	Icon,
	Text,
	Button,
	ScrollView,
	KeyboardAvoidingView
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
		<KeyboardAvoidingView
				_android={{ behavior: "height" }}
				_ios={{ behavior: "padding" }}
				height="full"
				bg="gameplay.background"
				py={10}
				px={2}
		>
			<ScrollView
				showsVerticalScrollIndicator={false}
			>
				<Header
					title="Schedule"
					goBack={()=>navigation.goBack()}
				/>
	
				<Categories
					type="schedule"
				/>
		
				<Form />
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default ScheduleMatch;
