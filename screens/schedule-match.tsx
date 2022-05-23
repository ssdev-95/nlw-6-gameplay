import React, {
	useState
}from "react";

import {
	Box,
	Icon,
	Text,
	Button,
	useDisclose,
	ScrollView,
	KeyboardAvoidingView
} from "native-base";

import {
	Header
} from "../components/schedule-header";

import {
	Categories
} from "../components/categories"

import { GuildsModal } from "../components/guilds-modal";
import { Form } from "../components/form";
import { IGuild } from "../custom-types.d";

function ScheduleMatch({ navigation }:any) {
	const [guild, setGuild] = useState<IGuild>({} as IGuild)
	const { isOpen, onOpen, onClose } = useDisclose()

	function handleSelectGuild(gild:IGuild) {
		setGuild(gild)
		setTimeout(onClose, 500)
	}

	return (
		<>
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
		
					<Form
						onOpen={onOpen}
						guild={guild}
					/>
				</ScrollView>
			</KeyboardAvoidingView>
			<GuildsModal
				isOpen={isOpen}
				onClose={handleSelectGuild}
			/>
		</>
	)
}

export default ScheduleMatch;
