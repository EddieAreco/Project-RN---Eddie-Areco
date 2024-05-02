import { Image, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import SubmitButton from '../components/SubmitButton'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopService'

const MyProfile = ({ navigation }) => {

    const { imageCamera, localId } = useSelector(state => state.authReducer.value)
    const { data: imageFromBase } = useGetProfileImageQuery(localId)

    const launchCamera = () => {
        navigation.navigate('image-selector')
    }

    const defaultImageRoute = '../../assets/favicon.png'

    return (

        <View>

            {imageFromBase || imageCamera ? (

                <Image
                    source={{ uri: imageFromBase?.image || imageCamera }}
                    resizeMode='cover'
                />

            ) : (
                <View>

                    <Image
                        source={require(defaultImageRoute)}
                        resizeMode='cover'
                    />

                    <Button
                        onPress={launchCamera}
                        title='Agregar foto de perfil'
                    />

                </View>
            )}

        </View>

    )
}

export default MyProfile

const styles = StyleSheet.create({})