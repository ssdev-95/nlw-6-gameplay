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
	scheduleMatch: (match:IMatch) => Promise<void>;
	retrieveMatches: () => Promise<void>;
	selectMatch: (id:string) => void;
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
	const [matchId, setMatchId] = useState("")
	const key = "@gameplay::matches";

	async function scheduleMatch(match:IMatch) {
		const updated = [...matches, match]

		//setMatches(upated)
		await storeData(key,JSON.stringify(updated))
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
			retrieveMatches,
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
