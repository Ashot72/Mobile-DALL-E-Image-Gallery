import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { View, Text } from "react-native"
import { Alert } from "react-native"
import { AzureInstance, AzureLoginView } from "../../lib"
import { RootStackScreenProps } from "../navigators/RootNavigators"
import { redirect_uri, scope } from "../constants"
import { client_id, client_secret } from "../secret"

const SignInScreen = ({ navigation }: RootStackScreenProps<"SignIn">) => {
    const [loginSuccess, setLoginSuccess] = useState(false)
 
    const credentials =  { client_id, client_secret, redirect_uri, scope }
    const azureInstance = new AzureInstance(credentials)

    const onLoginSuccess = async() => {
        try {
            const token = await azureInstance.getToken() as string
            await AsyncStorage.setItem('token', JSON.stringify(token));

          const userInfo = await azureInstance.getUserInfo()
          
          setLoginSuccess(true)
          await AsyncStorage.setItem('auth', JSON.stringify(userInfo));       
          (navigation.navigate as any)("Home")
     
        } catch(err: any) {
            Alert.alert("Error", err.message)
            console.error(err)
        }
    }
  
    if(!loginSuccess) {
        return (
            <AzureLoginView
               azureInstance={azureInstance}
               loadingMessage="Requesting access token ..."
               onSuccess={(onLoginSuccess)}
            />
        )
    }

    return <View />
}

export default SignInScreen