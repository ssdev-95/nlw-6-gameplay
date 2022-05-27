const BASE_KEY = "@gameplay"
export const MATCH_KEY = `${BASE_KEY}::matches`;
export const AUTH_KEY = `${BASE_KEY}::user`;
export const GUILD_KEY = `${BASE_KEY}::guilds`;

export interface IGuild {
	id?: string;
	name: string;
	icon: string;
	owner?: boolean;
	members?: IUser[];
}

export interface IMatch {
	id: string;
	description?: string;
	category: "fun" | "duel" | "ranked" |"console";
	guild: IGuild;
	date: string;
	created_by: string;
}

export interface IUser {
	id: string;
	name: string;
	avatar: string;
	bio?: string;
	token?: string;
	available?: boolean;
}

export type ICategory = {
	id: string;
	name: string;
	icon: string;
}

export type EditingMatch = {
	description: string;
	day: string;
	month: string;
	hour: string;
	minute: string;
}

