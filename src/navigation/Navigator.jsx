import { StyleSheet } from 'react-native'
import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import HomeStack from './HomeStack'
import HomeTab from './HomeTab'

const Navigator = () => {
    return (

        <NavigationContainer>

                {/* <HomeStack /> */}

                <HomeTab />

        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})