import { Image, StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import SubmitButton from '../components/SubmitButton'
import Location from '../components/Location'

import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopService'

const { height, width } = Dimensions.get('window')

const MyProfile = ({ navigation }) => {

    const { imageCamera, localId } = useSelector(state => state.authReducer.value)
    const { data: imageFromBase } = useGetProfileImageQuery(localId)

    const launchCamera = () => {
        navigation.navigate('Image-selector')
    }

    const defaultImageRoute = "https://i.ibb.co/yXZXXJ1/user-login-icon-14.png"

    return (

        <View>

            {imageFromBase || imageCamera ? (

                <View style={styles.containerNoimageFromBase}>
                    <View>

                        <Image
                            source={{ uri: imageFromBase?.image || imageCamera }}
                            resizeMode='cover'
                            style={styles.imageMyProfile}
                        />

                        <View style={styles.containerAntDesign}>
                            <TouchableOpacity
                                onPress={launchCamera}
                                style={styles.touchable}
                            >
                                <AntDesign name="camera" size={40} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Location />

                </View>

            ) : (
                <View style={styles.containerNoimageFromBase}>
                    <View>
                        <View style={styles.containerImage}>
                            <Image
                                source={{ uri: defaultImageRoute }}
                                resizeMode='cover'
                                style={styles.defaultImageRoute}
                            />

                        </View>

                        <View style={styles.containerAntDesign}>
                            <TouchableOpacity
                                onPress={launchCamera}
                                style={styles.touchable}
                            >
                                <AntDesign name="camera" size={40} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Location />

                </View>
            )}

        </View>

    )
}

export default MyProfile

const styles = StyleSheet.create({
    imageMyProfile: {
        marginTop: 20,
        height: height * 0.2,
        width: width * 0.35,
        borderRadius: height * 0.5,
        resizeMode: 'center',
    },
    containerNoimageFromBase: {
        alignItems: 'center',
        width: '100%',
    },
    containerImage: {
        borderRadius: height * 0.5,
        borderWidth: 1,
        backgroundColor: 'azure',
    },
    defaultImageRoute: {
        height: height * 0.2,
        width: width * 0.35,
        borderRadius: height * 0.5,
        resizeMode: 'center',
    },
    containerAntDesign: {
        position: 'absolute',
        bottom: width * 0.01,
        right: width * 0.01,
    },
    touchable: {
        backgroundColor: '#ffffff',
        borderRadius: height * 0.5,
        borderWidth: 1,
        padding: 5,
    }
})