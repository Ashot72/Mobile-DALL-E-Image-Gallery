import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import TabsNavigator, { TabsStackParamList } from "./TabsNavigator"
import SignInScreen from "../screens/SignInScreen";

export type RootStackParamList =  {
    TabsStack: NavigatorScreenParams<TabsStackParamList>
    SignIn: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
               name="TabsStack"
               component={ TabsNavigator }
               options= {{
               headerShown: false,
               }}
            />
            <RootStack.Screen
               name="SignIn"
               component={SignInScreen}   
               options= {{
                presentation: "modal"
               }}       
            />
        </RootStack.Navigator>
    )
}

export default RootNavigator