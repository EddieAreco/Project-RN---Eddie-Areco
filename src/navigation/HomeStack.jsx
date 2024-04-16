import { View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Header from '../components/Header'
import Home from '../screens/Home'
import ItemListCategory from '../screens/ItemListCategory'
import Detail from '../screens/Detail'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <View style= {styles.containerHomeStack}>
            
        <Stack.Navigator
            initialRouteName= 'Home'
            screenOptions= {
                ({ route }) => (
                    {
                        header: () => {
                            return <Header title={
                                route.name === 'Home' ? 'CategoryItem' : route.name === 'ItemListCategory' ? route.params.category : 'Detail'
                            } />
                        }
                    }
                )
            }
            >
            <Stack.Screen
                component={Home}
                name='Home'
            />

            <Stack.Screen
                component={ItemListCategory}
                name='ItemListCategory'
            />

            <Stack.Screen
                component={Detail}
                name='Detail'
            />
        </Stack.Navigator>
        </View>
    )
}

export default HomeStack

const styles = StyleSheet.create({
    containerHomeStack:{
        backgroundColor: 'brown',
        flex: 1,
        width: '100%',
    }
})

