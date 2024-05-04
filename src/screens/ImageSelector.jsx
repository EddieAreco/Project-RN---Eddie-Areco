import { Image, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import SubmitButton from '../components/SubmitButton'
import { useDispatch, useSelector } from 'react-redux'

import * as ImagePicker from 'expo-image-picker'
import { setCameraImage } from '../features/user/userSlice'
import { usePostProfileImageMutation } from '../services/shopService'

const ImageSelector = ({ navigation }) => {

    const [image, setImage] = useState(null)

    const [confirm, setConfirm] = useState(false)

    const [triggerPostImage, result] = usePostProfileImageMutation()

    const { localId } = useSelector(state => state.authReducer.value)

    console.log('image', image)
    console.log('localId', localId)

    const dispatch = useDispatch()

    const verifyCameraPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        //GRANTED ES UN BOOLEAN QUE INDICA SI EL PERMISO FUE OTORGADO

        if ( status !== "granted" ){
            Alert.alert( "El permiso para acceder a la cámara fue denegado" )
            return
        }

        return status
    }

    const verifyGaleryPermissions = async () => {

        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if ( status !== "granted" ){
            Alert.alert( "El permiso para acceder a la galería fue denegado" )
            return
        }

        return status

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
                    const imageConfirm = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setImage(imageConfirm)
                    setConfirm(true)
                }
            }

        } catch (error) {
            console.log(error)
        }

    }

    const galeryImage = async () => {

        try {

            const isGaleryOk = await verifyGaleryPermissions()

            if (isGaleryOk) {
                let result2 = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [1, 1],
                    base64: true,
                    quality: 0.2,
                });

                if (!result2.canceled) {
                    const imageConfirm2 = `data:image/jpeg;base64,${result2.assets[0].base64}`
                    setImage(imageConfirm2)
                    setConfirm(true)
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
            Alert.alert( 'Imagen guardada con éxito')
            setConfirm(false)
            navigation.goBack()

        } catch (error) {
            console.log(error)
        }

    }

    return (

        <View>
            {image ? (

                <>

                    <SubmitButton
                        title='Volver'
                        onPress={() => navigation.goBack()}
                    />

                    <Image
                        source={{ uri: image }}
                        resizeMode='cover'
                        style={styles.imageImageSelector}

                    />

                    <SubmitButton
                        title='Tomar una foto'
                        onPress={pickImage}
                    />

                    <SubmitButton
                        title='Elegir foto de la galería'
                        onPress={galeryImage}
                    />

                    {confirm && 

                        <SubmitButton
                            title='Confirmar foto'
                            onPress={confirmImage}
                        />
                    }

                </>
            ) : (
                <>

                    <SubmitButton
                        title='Volver'
                        onPress={() => navigation.goBack()}
                    />

                    <View style={styles.containerNophoto}>

                        <Text> No hay foto para mostrar </Text>

                    </View>

                    <SubmitButton
                        title='Tomar una foto'
                        onPress={pickImage}
                    />

                    <SubmitButton
                        title='Elegir foto de la galería'
                        onPress={galeryImage}
                    />

                </>
            )
            }
        </View>

    )
}

export default ImageSelector

const styles = StyleSheet.create({
    imageImageSelector: {
        marginTop: 50,
        height: 100,
        width: 100,
    },
    containerNophoto: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
    }
})