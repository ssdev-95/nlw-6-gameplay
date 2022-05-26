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

import { v4 as uuid } from "uuid";

import {
	Header
} from "../components/schedule-header";

import {
	Categories
} from "../components/categories"

import { Form } from "../components/form";
import { useMatch } from "../hooks/useMatch";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import { IGuild } from "../custom-types.d";

function ScheduleMatch({ navigation }:any) {
	const {
		selected,
		newMatch,
		guild,
		selectGuild,
		resetFields,
		handleChange
	} = useForm()

	const { scheduleMatch } = useMatch()
	const { user } = useAuth()

	async function handleSubmit() {
		const {
			day, month, hour, minute, description
		} = newMatch;
		const date = `${[day,month].join("/")} at ${[hour,minute].join(":")} ${hour > 12 ? "pm" : "am"}`
		const match = {
			id: uuid(),
			date,
			description,
			guild,
			category: selected,
			created_by: user.id,
		}

		await scheduleMatch(match)
			.then(()=>{
				setTimeout(()=>navigation.navigate("Home"), 1000)
			})
			.catch(err=>console.error(err))

		resetFields();
	}

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
		
				<Form
					onOpen={()=>navigation.navigate("Guilds")}
					onChange={handleChange}
					onSubmit={handleSubmit}
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default ScheduleMatch;
