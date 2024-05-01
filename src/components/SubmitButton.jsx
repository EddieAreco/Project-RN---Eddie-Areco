import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubmitButton = ({ onPress, title }) => {
    return (

        <View>

            <Pressable onPress={onPress}>

                <Text>{title}</Text>

            </Pressable>

        </View>

    )
}

export default SubmitButton

const styles = StyleSheet.create({})