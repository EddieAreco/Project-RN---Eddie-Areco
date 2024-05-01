import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/inputForm'
import SubmitButton from '../components/SubmitButton'
import { useSignInMutation } from '../services/authenticatorService'
import { setUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'

import { signupSchema } from '../validations/authSchema'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const dispatch = useDispatch()

    const [triggerSignIn, result] = useSignInMutation()

    useEffect(() => {

        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
        }
    }, [result])

    const onSubmit = () => {

        try{

            // const validation = signupSchema.validateSync({ email, password })
            triggerSignIn({ email, password, returnSecureToken: true })

        } catch (error) {

            console.log('Catch error LOGIN')
            console.log(error.path)
            console.log(error.message)

            

        }
        
    }

    return (

        <View>

            <View>

                <Text> Inicia sesion para usar la app</Text>
                <InputForm
                    label={'email'}
                    onChange={setEmail}
                    error={errorEmail}
                />
                <InputForm
                    label={'password'}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <SubmitButton
                    onPress={onSubmit}
                    title='Enviar'
                />
                <Text>No tienes una cuenta aún?</Text>
                <Pressable
                    onPress={() => { navigation.navigate('Signup') }}
                >
                    <Text> Registrarme </Text>
                </Pressable>

            </View>

        </View>

    )
}

export default LoginScreen

const styles = StyleSheet.create({})