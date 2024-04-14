import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CategoryItem from '../components/CategoryItem'

import categories from '../data/categories.json'

const Home = ( { route, navigation } ) => {

  console.log(route)
  console.log(navigation)


  return (
    <View style={styles.container}>
      
      <FlatList
      data = {categories}
      keyExtractor={ (item) => item}
      renderItem={ ({item}) => 
      
      <CategoryItem 
      category={item}
      navigation={navigation}
      />}
      />

    </View>
  )
}

export default Home

const styles= StyleSheet.create({
    container:{
        backgroundColor: 'red',
    },
})