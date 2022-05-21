interface ISquad {
	name: string;
	badge: string;
	players: IUser[];
}

export interface IMatch {
	id: string;
	subject: string;
	category: "fun" | "duel" | "ranked" |"console";
	squad: Omit<ISquad, "players">;
	players_count: number!
	date: string;
	created_by: string;
}

export interface IUser {
	id: string;
	name: string;
	avatar: string;
	bio?: string;
	token?: string;
}
