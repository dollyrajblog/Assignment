import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
const {height,width}=Dimensions.get("window");
const CustomDrawer = () => {
  return (
    <View style={styles.main}>
        <Text style={styles.txt}>Hello Username</Text>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    main:{
        backgroundColor:"lightgreen",
        height:height*0.18,
        width:width*0.6,
        alignSelf:"center",
        justifyContent:"space-evenly"
    },
        txt:{
        color:"white",
        fontWeight:"600",
        fontSize:20,
    },
})