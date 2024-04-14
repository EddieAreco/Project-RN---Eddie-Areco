import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import React, { useEffect, useState } from 'react'

import products from '../data/products.json'
import ProductItem from '../components/ProductItem';

import Search from '../components/Search';

const ItemListCategory = (
  { categorySelected = "laptops",
    setCategorySelected = () => { },
    setItemIdSelected = () => { },
    navigation,
    route
  }) => {

  const [keyword, setKeyword] = useState("")

  const [productsFiltered, setProductsFiltered] = useState([])

  useEffect(() => {

    const prevFiltered = products.filter(product => product.category === categorySelected)
    const filter = prevFiltered.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
    setProductsFiltered(filter);

  }, [keyword, categorySelected])

  return (
    <>
      <Header title={'category'} />

      <View>

        <Search onSearch={setKeyword} goBack={() => setCategorySelected("")} />

        <FlatList
          data={productsFiltered}
          
          renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}

          keyExtractor={(product) => product.id}
        />
      </View>
    </>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
})