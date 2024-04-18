import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { View, StyleSheet } from "react-native-web"
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

import Home from "../screens/Home"
import Header from "../components/Header"
import CartTabNavigator from "./CartTabNavigator"

const Tab = createBottomTabNavigator()

const HomeTab = () => {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: () => {
                    return <Header route={route} />
                },
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            })}
        >

            <Tab.Screen
                name="Shop"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FontAwesome5
                                name="shopping-basket"
                                size={24}
                                color={focused ? "black" : "red"}
                            />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="CartTabNavigator"
                component={CartTabNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FontAwesome6
                                name="cart-shopping"
                                size={24}
                                color={focused ? "black" : "red"}
                            />
                        )
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default HomeTab

const styles = StyleSheet.create({
    tabBar: {
        flex: 1,
        backgroundColor: 'blue',
        height: 300,
        justifyContent: 'center',
        border: 2,
        borderColor: 'green'
    }
})