import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

import { useDispatch } from "react-redux"
import { useGetProductsByIdQuery } from '../services/shopService'

import { addItem } from '../features/cart/cartSlice'

const Detail = ({
    route,
    navigation,
}) => {

    const dispatch = useDispatch();

    const { productId: itemIdSelected } = route.params

    const { data: products, error, isLoading } = useGetProductsByIdQuery( itemIdSelected )

    const handleAddItem = () => {

        dispatch( addItem({...products, quantity: 1 }) )

    }

    return (
        <View>

            <Button onPress={ () => navigation.goBack() } title='Volver'/>

            {products ? (
                <View>

                    <Image
                        resizeMode='cover'
                        source={{ uri: products.images[0] }}
                        style={styles.imgDetail}
                    />
                    <Text> {products.title} </Text>
                    <Text> {products.price} </Text>
                    <Button onPress={ handleAddItem } title='Agregar al carrito' />

                </View>
            ) : null}

        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    imgDetail: {
        height: 100,
    },
})