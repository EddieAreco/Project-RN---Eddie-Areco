import { StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Header from '../components/Header'
import Home from '../screens/Home'
import ItemListCategory from '../screens/ItemListCategory'
import Detail from '../screens/Detail'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (

        <NavigationContainer>

            <Header title={'Titulo principal'} />

            <Stack.Navigator>

                <Stack.Screen
                    component={Home}
                    name='Home'
                />

                <Stack.Screen
                    component={ItemListCategory}
                    name='ItemListCategory'
                />

                <Stack.Screen
                    component={Detail}
                    name='Detail'
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})