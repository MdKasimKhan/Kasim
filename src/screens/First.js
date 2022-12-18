import { StyleSheet, Text, TextInput, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const First = () => {
  return (
    <View style={{backgroundColor:""}}>
      <Text style={{color:'red',fontSize:50 ,width:"80%",alignSelf:"center",}}>CALCULATOR</Text>
      <View>
      
        <View style={{flexDirection:'row',justifyContent:'space-between',height:90,width:'90%',alignSelf:"center",margin:10}}>
          <Text style={{fontSize:60,height:80,width:'20%',alignSelf:'center',}}>+</Text>
          <Text style={{fontSize:60,height:80,width:'20%',alignSelf:'center'}}>-</Text>
          <Text style={{fontSize:60,height:80,width:'20%',alignSelf:'center'}}>*</Text>
          
          
        </View>
        <Text style={{fontSize:60,height:100,alignSelf:'center',}}>=</Text>

     
        </View>

        <View style={{}}>
    <View style={{flexDirection:'row',borderTopWidth:1,justifyContent:'space-between',width:'90%',alignSelf:'center'}}>

<Text style={{fontSize:60,height:80,alignSelf:'center',}}>1</Text>
  <Text style={{fontSize:60,height:80,alignSelf:'center'}}>2</Text>
  <Text style={{fontSize:60,height:80,alignSelf:'center'}}>3</Text>
  
</View>

<View style={{flexDirection:'row',borderTopWidth:1,justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
<Text style={{fontSize:60,height:80,alignSelf:'center'}}>4</Text>
<Text style={{fontSize:60,height:80,alignSelf:'center',}}>5</Text>
<Text style={{fontSize:60,height:80,alignSelf:'center'}}>6</Text>


</View>
<View style={{flexDirection:'row',borderTopWidth:1,justifyContent:'space-between',width:'90%',alignSelf:'center'}}>
<Text style={{fontSize:60,height:80,alignSelf:'center'}}>7</Text>
<Text style={{fontSize:60,height:80,alignSelf:'center',}}>8</Text>
<Text style={{fontSize:60,height:80,alignSelf:'center'}}>9</Text>


</View>
<TouchableOpacity style={{borderTopWidth:1,width:'90%',alignSelf:'center'}}>
  <Text style={{fontSize:60,height:80,alignSelf:'center'}}>0</Text>
 
</TouchableOpacity>
      </View> 
    </View>
  )
}

export default First

const styles = StyleSheet.create({})