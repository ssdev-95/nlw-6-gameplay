export interface IGuild {
	id?: string;
	name: string;
	badge: string;
	game?: string;
	players?: IUser[];
}

export interface IMatch {
	id: string;
	subject: string;
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
