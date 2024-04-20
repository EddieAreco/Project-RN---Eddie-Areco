import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useWindowDimensions, Platform, SafeAreaView } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import { useFonts } from 'expo-font';
import Home from './src/screens/Home';

import Navigator from './src/navigation/Navigator';

export default function App() {

  // const [categorySelected, setCategorySelected] = useState("")

  // const [productSelected, setProductSelected] = useState("")

  // const [itemIdSelected, setItemIdSelected] = useState("")

  // const [orientation, setOrientation] = useState ("portrait")

  // const { width, height } = useWindowDimensions()

  // useEffect( () => {

  //   if (width > height){
  //     setOrientation ("landscape")
  //   } else{
  //     setOrientation("portrait")
  //   }

  // }, [ width, height])
  
  const [ fontsLoaded, fontError ] = useFonts({
    'Roboto': require('./assets/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded || fontError){
    return null;
  }

  if (fontsLoaded && !fontError){
    
  return (
    <SafeAreaView style={styles.container}>
      
      <Navigator />
      
    </SafeAreaView>
  );

  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    width: '100%',
    backgroundColor: 'pink',
  },
});
