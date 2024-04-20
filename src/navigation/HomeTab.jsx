import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { View, StyleSheet } from "react-native-web"
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

import Header from "../components/Header"
import CartTabNavigator from "./CartTabNavigator"

import HomeStack from "./HomeStack";

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
                tabBarActiveTintColor: 'purple'
            })}
        >

            <Tab.Screen
                name="Shop"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <FontAwesome5
                                name="shopping-basket"
                                size={24}
                                color={color}
                            />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="CartTabNavigator"
                component={CartTabNavigator}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <FontAwesome6
                                name="cart-shopping"
                                size={24}
                                color={color}
                            />
                        )
                    },
                    tabBarBadge: 3,
                }}
            />

        </Tab.Navigator>
    )
}

export default HomeTab

const styles = StyleSheet.create({})