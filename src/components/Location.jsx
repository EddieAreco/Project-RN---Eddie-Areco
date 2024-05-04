import { StyleSheet, Text, View, Dimensions, Image, Touchable, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import * as LocationExpo from 'expo-location'

const { height, width } = Dimensions.get('window')

const Location = () => {

    const [location, setLocation] = useState('')
    const [confirm, setConfirm] = useState(false)

    const handleGetLocation = async () => {

        try {

            let { granted } = await LocationExpo.requestForegroundPermissionsAsync();

            if (!granted) {
                Alert.alert('El permiso a la ubicación fue denegado')
                return
            }

            let locationUser = await LocationExpo.getCurrentPositionAsync({})

            const objectLocation = {
                latitude: locationUser.coords.latitude,
                longitude: locationUser.coords.longitude,
            }

            console.log('objectLocation', objectLocation)

            setLocation(objectLocation)
            setConfirm(true)

        } catch (error) {
            console.log('error en location es:', error)
        }
    }

    const handleSubmitLocation = async () => {
        //GUARDAR UBICACION EN BASE DE DATOS
        Alert.alert('Ubicación guardada')
        setConfirm(false)
    }

    return (

        <View style={styles.container}>

            <View style={styles.containerImage}>
                {location ?

                    <>

                        <Text>Lat: {location.latitude}</Text>
                        <Text>Long: {location.longitude}</Text>

                    </>
                    :

                    <Image style={styles.imgMap} source={{ uri: "https://i.ibb.co/pLLSXzp/img-ubicacion.png" }} />

                }
            </View>

            <TouchableOpacity style={styles.touchable} onPress={handleGetLocation}>
                <Text style={styles.textTouchable}> Obtener ubicación </Text>
            </TouchableOpacity>

            {confirm &&
                <TouchableOpacity style={styles.touchable} onPress={handleSubmitLocation}>
                    <Text style={styles.textTouchable}> Guardar ubicación </Text>
                </TouchableOpacity>
            }

        </View>

    )
}

export default Location

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 50,
    },
    containerImage: {
        backgroundColor: '#e8e8e4',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.6,
        height: height * 0.25,
    },
    imgMap: {
        height: '100%',
        width: '100%',
        resizeMode: 'center',
    },
    touchable: {
        backgroundColor: 'green',
        width: width * 0.6,
        marginTop: 10,
        height: 40,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTouchable: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
})