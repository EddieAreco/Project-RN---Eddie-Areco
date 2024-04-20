import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

const Header = ( {title} ) => {

  const {height, width} = useWindowDimensions()

  return (
    <View style={styles.container}>
      <Text style={styles.title}> { title } </Text>
    </View>
  )
}

export default Header

const styles= StyleSheet.create({
    container:{
        width:'100%',
    },
    title:{
      fontFamily: 'Roboto',
      fontSize: 20,
      alignSelf: 'center',
    },
})