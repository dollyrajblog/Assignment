import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Home,Breeds } from '../screens/index'
import CustomHeader from '../components/CustomHeader'
import CustomBottam from '../components/CustomBottam'
import CustomDrawer from '../components/CustomDrawer'
const Stack = createStackNavigator();
const Drawer=createDrawerNavigator();
const Routes = () => {
  return (
    // <View>
    //  {/* <Home/> */}
    //  {/* <CustomHeader/> */}
    //  {/* <Breeds/> */}
    //  {/* <CustomBottam/> */}
    //  <CustomDrawer/>
    // </View>
  <NavigationContainer>
    <Stack.Navigator  
       initialRouteName="HomeScreen"
       screenOptions={{ headerShown: false }}>
    <Stack.Screen name={"HomeScreen"} component={Home}/>
    <Stack.Screen name={"BreedsScreen"} component={Breeds} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default Routes
const styles = StyleSheet.create({})