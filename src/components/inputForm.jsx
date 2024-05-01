import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const InputForm = ({ label, onChange, error = '', isSecure = false }) => {

    const [input, setInput] = useState('')

    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

    return (

        <View style={styles.container}>

            <Text>{label}</Text>
            <TextInput
                value={input}
                onChangeText={onChangeText}
                secureTextEntry={isSecure}
            />

            {error ?

                <Text>
                    {error}
                </Text>

                : null
            }

        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'yellow',
        margin: 10,
    }
})