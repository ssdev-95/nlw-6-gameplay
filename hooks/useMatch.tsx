import React, {
	createContext,
	useContext,
  ReactNode,
	useEffect,
	useState
} from "react";

import { IMatch } from "../custom-types.d";

type MatchContextData = {
	matches: IMatch[];
	scheduleMatch: (match:IMatch) => void;
	selectCategory: (option:string) => void;
	selectMatch: (id:string) => void;
	selected: string;
	matchId: string;
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

	function scheduleMatch(match:IMatch) {
		setMatches(prev => [...prev, match])
	}

	function selectCategory(option:string) {
		setSelected(
			prev => prev === option ? "none" : option
		)
	}

	function selectMatch(id:string) {
		setMatchId(id)
	}

	useEffect(()=>{
		setMatches(prev => [
			...prev,
			{
				id: '19sdhms29jjUHqj29-82jj',
				name: '🔥 Bora queimar tudo 🔥',
				subject: 'Apex Legends',
				category: 'ranked',
				squad: {
					name: 'Legends of tomorrow',
					badge: 'https://github.com/rocketseat-education.png',
					players: [
						{
							id: "82ejx8xJbUG282hah-882j2",
							name: "Diego Fernandes",
							avatar: "https://github.com/diego3g.png",
							available: true
						}, {
							id: "2ejxGwi2j3e8s8ijh-882j2",
							name: "Abraço do Maykao",
							avatar: "https://github.com/maykbrito.png",
							available: true
						}, {
							id: "290kdnlqpaUqaIhah-84wp2",
							name: "Capita",
							avatar: "https://github.com/birobirobiro.png",
							available: false
						}, {
							id: "0Kk0wmgoIHq28d8hh-882j2",
							name: "Rodrigo Gonçalves",
							avatar: "https://github.com/rodrigorgtic.png",
							available: true
						}, {
							id: "929dcjznnsIgfNhah-10soj",
							name: "Jakelliny Gracielly",
							avatar: "https://github.com/jakeliny.png",
							available: false
						}, {
							id: "19HJA!91m1madjsk-1oosoj",
							name: "Tio Yan",
							avatar: "https://github.com/yants95.png",
							available: false
						}
					]
				},
				players_count: 6,
				date: 'Fri, August 25 2022 - 19:45',
				created_by: 'saro-senpai'
			}
		])
	}, [])

	return (
		<MatchContext.Provider value={{
			matches,
			scheduleMatch,
			selectCategory,
			selectMatch,
			selected,
			matchId
		}}>
			{ children }
		</MatchContext.Provider>
	)
}

export function useMatch() {
	return useContext(MatchContext);
}
