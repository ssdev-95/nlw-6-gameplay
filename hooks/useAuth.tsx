import React, {
	createContext,
	useContext,
	useState,
	ReactNode
} from "react";

import * as AuthSession from 'expo-auth-session';

import { api } from "../services/api";
import { IUser } from "../custom-types.d";

const {
	REDIRECT_URI,
	SCOPE,
	RESPONSE_TYPE,
	CLIENT_ID,
	CDN_IMAGE
} = process.env;

type AuthorizationResponse = AuthSession.AuthSessionResult & {
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
	signIn: ()=>Promise<voi>;
	signOut: ()=>Promise<voi>;
}

const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

const AuthContext = createContext({} as AuthData)

export function AuthProvider({
	children
}: ProviderProps) {
	const [user, setUser] = useState<IUser>({} as IUser)

	const signIn = async () => {
		let error:any
		try {
			const { type, params } = await AuthSession
        .startAsync({ authUrl })
				.catch(err => console.error(err)) as AuthorizationResponse;
			if (type !== "success" && params.error) {
				throw new Error(params.error)
			}
      api.defaults.headers.authorization = `Bearer ${params.access_token}`;

      const userInfo = await api.get('/users/@me')
			  .catch(err => console.error(err));

      const firstName = userInfo.data.username.split(' ')[0];
      userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

      const userData = {
        ...userInfo.data,
        name: firstName,
        token: params.access_token,
				bio: userInfo.data.bio ?? 'Another otaku fdp.'
      }

      //await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
      setUser(userData);

		} catch {
			throw new Error(error)
		} finally {
			console.log(user)
		}
	}

	const signOut = async signOut => {
		const response = {}
		setUser(response)
	}

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
