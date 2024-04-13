import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback, useState } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Header from './src/components/Header'
import Home from './src/screens/Home'
import ItemListCategory from './src/screens/ItemListCategory';
import Detail from './src/screens/Detail';

export default function App() {

  const [ fontsLoaded, fontError ] = useFonts({
    'Roboto': require('./assets/Roboto-Regular.ttf'),
  });

  const [categorySelected, setCategorySelected] = useState("")

  const [productSelected, setProductSelected] = useState("")

  const [itemIdSelected, setItemIdSelected] = useState("")

  if (!fontsLoaded || fontError){
    return null;
  }

  if (fontsLoaded && !fontError){
    
  return (
    <View style={styles.container}>

      <Header title={'Titulo principal'} />

      {!categorySelected ? (

        <Home setCategorySelected={setCategorySelected} />

      ) : !itemIdSelected ?
      (
        <ItemListCategory 
        categorySelected={categorySelected} 
        setCategorySelected={setCategorySelected}
        setItemIdSelected={setItemIdSelected}
        />
      ) : 
      (
        <Detail 
        itemIdSelected= {itemIdSelected}
        setProductSelected = {setProductSelected}
        />
      )
      }

      <StatusBar style="auto" />
    </View>
  );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
