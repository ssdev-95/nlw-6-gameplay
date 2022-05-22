import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(
	key:string, value:string
) {
	try {
    await AsyncStorage
			.setItem(key, value)
			.catch(err => console.error(err))
  } catch (err) {
    console.error(err)
  }
}

export async function retrieveData(key:string) {
	try {
		const stored = await AsyncStorage
			.getItem(key)
			.catch(err => console.error(err))

		if(!stored) throw new Error(`404 - No data found for given key: ${key}`)

			return stored;
	} catch (err) {
		console.error(err)
		return "";
	}
}

export async function removeData(key:string) {
	try {
		await AsyncStorage
			.removeItem(key)
			.catch(err => console.error(err))
	} catch (err) {
		console.error(err)
	}
}

export async function eraseData(keys:string[]) {
	await AsyncStorage
		.multiRemove(keys)
		.then(()=>console.log("done"))
		.catch(err=>console.error(err))
}
