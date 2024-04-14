import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import allProducts from '../data/products.json'

const Detail = ({
    itemIdSelected = 1,
    setProductSelected = () => { }
}) => {

    const [products, setProducts] = useState("");

    useEffect(() => {

        const findProduct = allProducts.find((product) => product.id === itemIdSelected)

        setProducts(findProduct)

    }, [itemIdSelected])

    return (
        <View>

            <Button onPress={ () => setProductSelected("") } title='Volver'/>

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