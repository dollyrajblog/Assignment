import { StyleSheet, Text, View,Dimensions, SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader';
const {height,width}=Dimensions.get("window");
const DATA1=[
  {id:1,
  img:require("../../assets/images/whitecow.png"),
  },
  {id:2,
    img:require("../../assets/images/whitecow.png"),
  },
  {id:3,
    img:require("../../assets/images/whitecow.png"),
  },
  {id:4,
    img:require("../../assets/images/whitecow.png"),
  },
  {id:5,
    img:require("../../assets/images/whitecow.png"),
  }, 
];


const HomeScreen = () => {
  return (
    <SafeAreaView>
    <View style={styles.main}>
      {/* ======== CUSTOM HEADER ======== */}
     <CustomHeader/>
      <View style={styles.subcontainer}>
        <View style={styles.inline}>
          <Text style={styles.txt}>Cows</Text>
          <Text style={styles.txt}>See all</Text>
        </View>
        <View style={styles.flatcontainer1}>  
        <FlatList
        data={DATA1}
        // numColumns={1}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>{
          return(
            <View style={{height:height*0.24,width:width*0.4,justifyContent:"center"}}>
            <View style={styles.imgcontainer}>
            </View>
            </View>
          )}}/>
      </View>
      <View 
      style={{height:height*0.06,justifyContent:"center"}}>
      <Text style={styles.txt} >Explore</Text>
      </View>
      <FlatList
        data={DATA1}
        numColumns={2}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
          return(
            <View style={{height:height*0.28,width:width*0.495,}}>
            <View style={styles.imgcontainer2}>
            </View>
            </View>
          )}}/>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
main:{
height:height*1,
width:width*1,
alignItems:"center",
},
subcontainer:{
  height:height*1,
  width:width*0.92,
  // backgroundColor:"red",
},
inline:{
  height:height*0.07,
  flexDirection:"row",
  justifyContent:"space-between",
  // backgroundColor:"blue",
  alignItems:"center",
},
flatcontainer1:{
  // backgroundColor:"green",
  height:height*0.24,
  width:width*1,
  justifyContent:"center"
},
imgcontainer:{
  backgroundColor:"red",
  height:height*0.22,
  width:width*0.36,
  borderRadius:10,
},
imgcontainer2:{
  backgroundColor:"red",
  height:height*0.24,
  width:width*0.42,
  borderRadius:10,
},
txt:{
  fontSize:18,
  fontWeight:"800",
  color:"black"
}
})