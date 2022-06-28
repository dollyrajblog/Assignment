import { StyleSheet,View, Dimensions,TouchableOpacity,Image } from 'react-native'
import React from 'react'
const {height,width}=Dimensions.get("screen");
const CustomBottam = () => {
  return (
    <View style={styles.main}>
      <View style={styles.subcontainer}>
      <TouchableOpacity>
        <Image source={require("../assets/images/cowlogo.png")}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../assets/images/Breeds.png")}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../assets/images/stats.png")}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
        style={{height:25,width:25,tintColor:"white"}}
        source={require("../assets/images/profile.png")}/>
      </TouchableOpacity>
      </View>
    </View>
  )
}
export default CustomBottam
const styles = StyleSheet.create({
  main:{
    height:height*0.09,
    width:width*1,
    backgroundColor:"lightgreen",
    justifyContent:"center",
    alignItems:"center",
    },
    subcontainer:{
      width:width*0.92,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
    }
})