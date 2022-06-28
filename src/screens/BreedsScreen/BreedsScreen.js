import { StyleSheet, Text, View,Dimensions, TextInput,Image,TouchableOpacity,FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader';
const {height,width}=Dimensions.get("screen");
const DATA=[
  {
    id:1
  },
  {
    id:2
  },
  {
    id:3
  },
  {
    id:4
  },
  {
    id:5
  },
  {
    id:6
  },
];
const BreedsScreen = () => {
  return (
    <SafeAreaView>
    <View style={styles.main}>
{/* ======== CUSTOM HEADER ======== */}
      <CustomHeader/>
      <View style={styles.subcontainer}>
      <View style={{height:height*0.09,justifyContent:"center"}}>
      <View style={styles.search}>
      <TextInput style={{marginLeft:10, width:width*0.8, fontSize:18,}} placeholder='search here'/>
      <TouchableOpacity style={{ width:width*0.08, alignSelf:"center"}}>
      <Image source={require("../../assets/images/search.png")}/>
      </TouchableOpacity>
      </View>
      </View>
      <View style={{height:height*0.06,justifyContent:"center"}}>
        <Text style={{fontSize:20,color:"black",fontWeight:"800"}}>Sort by : New</Text>
      </View>
      <View style={styles.flatcontainer}>
      <FlatList
        data={DATA}
        numColumns={1}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
          return(
          <View style={styles.box}>
            <View style={styles.boxcontainer}>
            </View>
          </View>
          )}}/>
      </View>
      </View>
    </View>
    </SafeAreaView>
  )}
export default BreedsScreen
const styles = StyleSheet.create({
  main:{
  height:height*1,
  width:width*1,
  // backgroundColor:"green",
  alignItems:"center"
  },
  subcontainer:{
    width:width*0.92,
  },
  search:{
    backgroundColor:"grey", 
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center",
    // borderWidth:1,
    borderRadius:10,
  },
  flatcontainer:{
    // backgroundColor:"red",
    height:height*0.8,
  },
  box:{
    height:height*0.2,
    // backgroundColor:"green",
    justifyContent:"center",
  },
  boxcontainer:{
    backgroundColor:"lightgrey",
    width:width*0.92,
    height:height*0.18,
    borderRadius:10, 
  }
})