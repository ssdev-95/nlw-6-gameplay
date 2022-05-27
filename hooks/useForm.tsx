import React, {
	createContext,
	useContext,
  ReactNode,
	useState
} from "react";

import {
	storeData,
	retrieveData
} from "../services/storage";
import {
	IMatch,
	IGuild,
	EditingMatch,
	MATCH_KEY
} from "../custom-types.d";



type FormContextData = {
	matches: IMatch[];
	resetFields: () => void;
	selectGuild: (guilda:IGuild) => void;
	selectCategory: (option:string) => void;
	handleChange: (options:ChangeProps) => void;
	retrieveMatches: () => Promise<void>;
	scheduleMatch: (match:IMatch) => Promise<void>;
	selected: string;
	newMatch: EditingMatch;
	matchKey: string;
	guild:IGuild;
}

type ProviderProps = {
	children: ReactNode;
}

type ChangeProps = {
	key: string;
	value: string;
}

const FormContext = createContext<FormContextData>(
	{} as FormContextData
)

const reset = {}
export function FormProvider({
	children
}: ProviderProps) {
	const [selected, setSelected] = useState("none")
	const [matches, setMatches] = useState<IMatch[]>([])
	const [guild, setGuild] = useState<IGuild>(
		reset as IGuild
	)
	const [newMatch, setNewMatch] = useState<EditingMatch>(
		reset as EditingMatch
	)


	async function scheduleMatch(match:IMatch) {
		const updated = [...matches, match]

		//setMatches(upated)
		await storeData(
			MATCH_KEY,
			JSON.stringify(updated)
		)
	}

	async function retrieveMatches() {
		const stored = await retrieveData(MATCH_KEY)

		if(!stored) return;

		const parsed = JSON.parse(stored)
		setMatches(parsed)
	}

	function selectCategory(option:string) {
		const value = (selected === option) ? "none" : option
		setSelected(value)
	}

	function selectGuild(guilda:IGuild) {
		setGuild(guilda)
	}

	function handleChange({ key, value }: ChangeProps) {
		const match = {
			...newMatch,
			[key]: value
		}

		setNewMatch(match)
	}

	function resetFields() {
		selectCategory("none")
		setGuild(reset)
		setNewMatch(reset)
		console.log("resetaded!")
	}

	return (
		<FormContext.Provider value={{
			newMatch,
			handleChange,
			selectCategory,
			selected,
			guild,
			selectGuild,
			resetFields,
			scheduleMatch,
			retrieveMatches,
			matches
		}}>
			{ children }
		</FormContext.Provider>
	)
}

export function useForm() {
	return useContext(FormContext);
}
