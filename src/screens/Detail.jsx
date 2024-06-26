import { StyleSheet, Text, View, Image, Button, Dimensions, Pressable } from 'react-native'
import React from 'react'

import { useDispatch } from "react-redux"
import { useGetProductsByIdQuery } from '../services/shopService'

import { addItem } from '../features/cart/cartSlice'
import SubmitButton from '../components/SubmitButton'
import { colors } from '../constants/colors'

const { height, width } = Dimensions.get('window')
const Detail = ({ route }) => {

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

                        <Text style={styles.titleProduct}> {products.title} </Text>
                        <Text style={styles.priceProduct}> $ {products.price} </Text>
                        <Text style={styles.detailProduct}> Marca: {products.brand} </Text>
                        <Text style={styles.detailProduct}> Descripción: </Text>
                        <Text style={styles.detailProduct}> {products.description} </Text>

                    </View>

                    <View style={styles.containerButton}>

                        <Pressable
                        style={styles.addToCart} 
                        onPress={handleAddItem} 
                        >
                        
                        <Text> AGREGAR AL CARRITO </Text>
                        
                        </Pressable> 
                    </View>

                </View>
            ) : null}

        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerImage: {
        height: height * 0.5,
        width: width * 1,
        shadowColor: "@000",
        shadowOffset:{
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 15,
        alignSelf: 'center',
        marginTop: 8
    },
    imgDetail: {
        height: '100%',
    },
    containerTexts: {
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'flex-start',
        gap: 7,
        width:'100%',
    },
    titleProduct:{
        fontSize: 30
    },
    priceProduct:{
        color: '#1da1f2',
        fontWeight: '300',
        fontSize: 25
    },
    detailProduct:{
        fontSize: 15
    },
    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCart:{
        backgroundColor: colors.primary,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 10,
    },
})