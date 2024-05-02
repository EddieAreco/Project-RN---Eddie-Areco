import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SubmitButton from '../components/SubmitButton'
import { useDispatch } from 'react-redux'

import * as ImagePicker from 'expo-image-picker'
import { setCameraImage } from '../features/user/userSlice'
import { usePostProfileImageMutation } from '../services/shopService'

const ImageSelector = ({ navigation }) => {

    const [image, setImage] = useState('null')

    const [triggerPostImage, result] = usePostProfileImageMutation()

    const { localId } = useSelector(state => state.auth.value)

    const dispatch = useDispatch()

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        //GRANTED ES UN BOOLEAN QUE INDICA SI EL PERMISO FUE OTORGADO

        return granted
    }

    const pickImage = async () => {

        try {

            const isCameraOk = await verifyCameraPermissions()

            if (isCameraOk) {

                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    //ESTO SIRVE PARA RECORTAR IMAGENES
                    aspect: [1, 1],
                    base64: true,
                    quality: 0.2,
                });

                if (!result.canceled) {
                    setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
                }
            }

        } catch (error) {
            console.log(error)
        }

    }

    const confirmImage = async () => {

        try {

            dispatch(setCameraImage(image))
            triggerPostImage({ image, localId })
            navigation.goBack()

        } catch (error) {
            console.log(error)
        }

    }

    return (

        <View>
            {image ? (

                <>

                    <Image
                        source={{ uri: image }}
                    />
                    <SubmitButton
                        title='Tomar otro foto'
                        onPress={pickImage}
                    />
                    <SubmitButton
                        title='Confirmar foto'
                        onPress={confirmImage}
                    />

                </>
            ) : (
                <>

                    <View>

                        <Text> No hay foto para mostrar </Text>

                    </View>

                    <SubmitButton
                        title='Tomar una foto'
                        onPress={pickImage}
                    />

                </>
            )
            }
        </View>

    )
}

export default ImageSelector

const styles = StyleSheet.create({})