import { View } from "react-native"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native"
import  { SafeAreaView } from "react-native-safe-area-context"
import TabItem from "./TabItem";

const CustomBottomTabs = (props: BottomTabBarProps) => {
    const { colors } = useTheme()

    return (
        <SafeAreaView edges={["bottom"]} style={{ backgroundColor: colors.card}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 16
              }}
            >
             {
                props.state.routes.map((route, i) => {
                    const isActive = i === props.state.index

                    return (
                        <TabItem
                           key={route.name}
                           isActive={ isActive }
                           routeName={route.name}
                           navigation={props.navigation}
                        />
                    )
                })
             }
            </View>
        </SafeAreaView>
    )
}

export default CustomBottomTabs