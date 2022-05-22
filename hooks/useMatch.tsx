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
import { IMatch } from "../custom-types.d";

type MatchContextData = {
	matches: IMatch[];
	scheduleMatch: (match:IMatch) => void;
	retrieveMatches: () => Promise<void>;
	selectCategory: (option:string) => void;
	selectMatch: (id:string) => void;
	selected: string;
	matchId: string;
	key:string;
}

type ProviderProps = {
	children: ReactNode;
}

const MatchContext = createContext<MatchContextData>(
	{} as MatchContextData
)

export function MatchProvider({
	children
}: ProviderProps) {
	const [matches, setMatches] = useState<IMatch[]>([])
	const [selected, setSelected] = useState("none")
	const [matchId, setMatchId] = useState("")
	const key = "@gameplay::matches";

	function scheduleMatch(match:IMatch) {
		const updated = [...matches, match]

		setMatches(upated)
		storeData(key,JSON.stringify(updated))
	}

	function selectCategory(option:string) {
		const value = (selected === option) ? "none" : option
		setSelected(value)
	}

	function selectMatch(id:string) {
		setMatchId(id)
	}

	async function retrieveMatches() {
		const stored = await retrieveData(key)
	
		if(!stored) return;
		
		const parsed = JSON.parse(stored)
		setMatches(parsed)

	}

	return (
		<MatchContext.Provider value={{
			matches,
			scheduleMatch,
			selectCategory,
			retrieveMatches,
			selectMatch,
			selected,
			matchId,
			key
		}}>
			{ children }
		</MatchContext.Provider>
	)
}

export function useMatch() {
	return useContext(MatchContext);
}
