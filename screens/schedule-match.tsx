import {
	Box,
	Icon,
	Button,
	VStack
} from "native-base";

import {
	Header
} from "../components/schedule-header";

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
		</VStack>
	)
}

export default ScheduleMatch;
