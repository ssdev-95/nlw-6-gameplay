import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";

import { Alert } from "react-native";

import * as AuthSession from 'expo-auth-session';

import {
	AUTH_KEY,
	MATCH_KEY,
	GUILD_KEY
} from "../custom-types.d";

import {
	storeData,
	retrieveData,
	eraseData
} from "../services/storage";

import { useMatch } from "./useMatch";
import { api } from "../services/api";
import { IUser, IGuild } from "../custom-types.d";

import {
	REDIRECT_URI,
	SCOPE,
	RESPONSE_TYPE,
	CLIENT_ID,
} from "@env";

const CDN_IMAGE="https://cdn.discordapp.com"

type AuthResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}

type ProviderProps = {
	children: ReactNode;
}

type AuthData = {
	user: IUser;
	guildKey:string;
	signIn: ()=>Promise<void>;
	signOut: ()=>Promise<void>;
}

const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

const AuthContext = createContext({} as AuthData)

export function AuthProvider({
	children
}: ProviderProps) {
	const [user, setUser] = useState<IUser>({} as IUser)

	const signIn = async () => {
		try {
			const { type, params } = await AuthSession
        .startAsync({ authUrl })
				.catch(err => console.error(err)) as AuthResponse;
			if (type !== "success" && params.error) {
				throw new Error(params.error)
			}
      api.defaults.headers.authorization = `Bearer ${params.access_token}`;

      const userInfo = await api.get('/users/@me')
			  .catch(err => console.error(err));

			const guildsInfo  = await api.get("/users/@me/guilds")
				.catch(err => console.error(err));

      const firstName = userInfo.data.username.split(' ')[0];
      userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

      const userData = {
        ...userInfo.data,
        name: firstName,
        token: params.access_token,
				bio: userInfo.data.bio ?? 'Another otaku fdp.',
				available: false
      }

			const guildData = guildsInfo.data.map((guild:IGuild)=>({
				...guild,
				players: [ userData ],
				icon: `${CDN_IMAGE}/icons/${guild.id}/${guild.icon}.png`,
			}))


      await storeData(
				AUTH_KEY,
				JSON.stringify(userData)
			).catch(err=>console.error(err))

			await storeData(
				GUILD_KEY,
				JSON.stringify(guildData)
			).catch(err=>console.error(err))

      setUser(userData);
		} catch(err) {
			console.error(err)
		} /*finally {
			console.log(user)
		}*/
	}

	const signOut = async signOut => {
		const response = {
			user:{},
			matches:[],
			guilds:[]
		}

		setUser(response.user)

		await storeData(
			GUILD_KEY,
			JSON.stringify(response.guilds)
		).catch(err=>console.error(err))

		await storeData(
			MATCH_KEY,
			JSON.stringify(response.matches)
		).catch(err=>console.error(err))

		await storeData(
			AUTH_KEY,
			JSON.stringify(response.user)
		).catch(err=>console.error(err))
	}

	useEffect(()=>{
		retrieveData(AUTH_KEY)
			.then((data)=>{
				if(data) {
					const parsed = JSON.parse(data)
					setUser(parsed)
				}
			})
	}, [])

	return (
		<AuthContext.Provider value={{
			user,
			signIn,
			signOut
		}}>
			{ children }
		</AuthContext.Provider>
	)
}

export function useAuth() {
	return useContext(AuthContext);
}
