import { StyleSheet, Text, View, Image, Button, Dimensions } from 'react-native'
import React from 'react'

import { useDispatch } from "react-redux"
import { useGetProductsByIdQuery } from '../services/shopService'

import { addItem } from '../features/cart/cartSlice'
import SubmitButton from '../components/SubmitButton'
import { colors } from '../constants/colors'

const { height, width } = Dimensions.get('window')
const Detail = ( {route} ) => {

    const dispatch = useDispatch();

    const { productId: itemIdSelected } = route.params

    const { data: products, error, isLoading } = useGetProductsByIdQuery(itemIdSelected)

    const handleAddItem = () => {

        dispatch(addItem({ ...products, quantity: 1 }))

    }

    return (
        <View style={styles.container}>

            {products ? (
                <View>

                    <View style={styles.containerImage}>

                        <Image
                            resizeMode='cover'
                            source={{ uri: products.images[0] }}
                            style={styles.imgDetail}
                        />

                    </View>

                    <View style={styles.containerTexts}>

                        <Text> Nombre: {products.title} </Text>
                        <Text> Precio: {products.price} </Text>
                        <Text> Descripción: {products.description} </Text>

                    </View>

                    <View style={styles.containerButton}>

                        <SubmitButton onPress={handleAddItem} title='Agregar al carrito' />
                    </View>

                </View>
            ) : null}

        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
    },
    containerImage:{
        height: height * 0.2,
    },
    imgDetail: {
        height: '100%',
    },
    containerTexts: {
        backgroundColor: 'pink',
        marginVertical: 10,
        marginHorizontal: 30,
        gap: 8
    },
    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})