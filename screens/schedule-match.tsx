import {
	Box,
	Icon,
	Button,
	VStack
} from "native-base";

import {
	Header
} from "../components/schedule-header";

import {
	Categories
} from "../components/categories"

/*import {
	MaterialCommunityIcons
} from '@expo/vector-icons';*/

function ScheduleMatch({ navigation }:any) {
	return (
		<VStack
			height="full"
			bg="gameplay.background"
			py={10}
		>
			<Header
				title="Schedule a match"
				goBack={()=>navigation.goBack()}
			/>
			<Categories
				type="schedule"
			/>
		</VStack>
	)
}

export default ScheduleMatch;
