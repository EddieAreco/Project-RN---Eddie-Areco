import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'

import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

  const { products: CartData, total } = useSelector(state => state.cartReducer.value)
  //SE HACE UNA DESESTRUCTURACION CON LOS {} PORQUE ME INTERESA TRAER LOS ITEMS Y EL TOTAL DE state.cart.value

  return (

    <View style= { styles.container }>

      <FlatList
        data={CartData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />
        }}
      />

      <View>

        <Pressable onPress={() => { }}>

          <Text>Confirmar</Text>

        </Pressable>

        <Text> Total: ${total} </Text>

      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: 'blue',
  // }
})