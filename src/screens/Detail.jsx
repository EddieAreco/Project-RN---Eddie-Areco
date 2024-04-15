import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import allProducts from '../data/products.json'

const Detail = ({
    route,
    navigation,
}) => {

    const [products, setProducts] = useState("");

    const { productId: itemIdSelected } = route.params

    useEffect(() => {

        const findProduct = allProducts.find((product) => product.id === productId )

        setProducts(findProduct)

    }, [itemIdSelected])

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