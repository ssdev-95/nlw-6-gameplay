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
import { useMatch } from "../hooks/useMatch";
import { useAuth } from "../hooks/useAuth";
import { IGuild } from "../custom-types.d";

type EditingMatch = {
	description: string;
	day: string;
	month: string;
	hour: string;
	minute: string;
}

function ScheduleMatch({ navigation }:any) {
	const { selected, scheduleMatch } = useMatch()
	const { user } = useAuth()
	const [guild, setGuild] = useState<IGuild>({} as IGuild)
	const [match, setMatch] = useState<EditingMatch>(
		{} as EditingMatch
	)
	const { isOpen, onOpen, onClose } = useDisclose()

	function handleSelectGuild(gild:IGuild) {
		setGuild(gild)
		setTimeout(onClose, 500)
	}

	function handleChange(key:string, value:string) {
		setMatch(prev => ({
			...prev,
			[key]: value
		}))
	}

	async function handleSubmit() {
		const { day, month, hour, minute, description } = match;
		const date = `${[day,month].join("/")} at ${[hour,minute].join(":")}`
		const newMatch = {
			date,
			category: selected,
			guild: { ... guild, players: [ user ]},
			created_by: user.id,
			subject: guild.game,
			name: description
		}

		await scheduleMatch(newMatch)
			.then(()=>{
				setTimeout(()=>navigation.navigate("Home"), 1000)
			})
			.catch(err=>console.error(err))
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
						onChange={handleChange}
						onSubmit={handleSubmit}
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
