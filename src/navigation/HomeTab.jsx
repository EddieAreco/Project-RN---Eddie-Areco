import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Header from "../components/Header"
import ShopTabNavigator from "../components/ShopTabNavigator"
import { View } from "react-native-web"
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const HomeTab = () => {
  return (
    
    <Tab.Navigator
    screenOptions= {({ route }) => ({
        header: () => {
            return <Header route= {route} />
        },
        tabBarShowLabel: false,
        // tabTabStyle: styles.tabBar,
    })} 
    >
        
    <Tab.Screen 
    name="Shop"
    component={ShopTabNavigator}
    options={{
        tabBarIcon: ({ focused }) => {
            return(
                <View>
                    <FontAwesome5 
                    name="shopping-basket" 
                    size={24} 
                    color="black" 
                    />
                </View>
            )
        }
    }}
    />

    </Tab.Navigator>
  )
}

export default HomeTab

// const styles = StyleSheet.create({})