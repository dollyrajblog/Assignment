import { StyleSheet, View, Dimensions, SafeAreaView,Image,TouchableOpacity} from 'react-native'
import React from 'react'
const {height,width}=Dimensions.get("screen");

const CustomHeader = () => {
  return (
    <SafeAreaView>
    <View style={styles.main}>
      <View style={styles.subcontainer}>
        <TouchableOpacity>
          <Image source={require("../assets/images/menu.png")}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/images/cowlogo.png")}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <Image 
          style={styles.img}
          source={require("../assets/images/notification.png")}/>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    main:{
        height:height*0.09,
        width:width*1,
        backgroundColor:"lightgreen",
        alignItems:"center",
    },
    subcontainer:{
        height:height*0.1,
        width:width*0.92,
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
    },
    img:{
      height:22,
      width:22,
      // backgroundColor:"red",
      tintColor:"white",
    }
})