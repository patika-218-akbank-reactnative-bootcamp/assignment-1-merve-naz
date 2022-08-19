import React from 'react';


import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Story = () =>{
    return(
        <ScrollView  horizontal >
       <View style={{display:"flex" , flexDirection:"row",width:"100%",marginBottom:10}} >

       <View style={{postion:"relative"}}>
        
       <Tab/>
       {/* bu tap componenti ise kendı storyımız kısmında bulunan stroy ekleme kısmı için yer alan kucuk yuvarlak nesneyi olusturuyor*/}
       <Tap>
       <Icon name="minus" size={60} color="#9007"></Icon>
       {/* bu kucuk yuvarlak nesnenin yanı yeni story eklemımızı saglayan nesnenin icinde artı isareti olması için ıcon kullandım */}
       </Tap>
      
       </View>

       <Tab/>

       {/* Tab her bir story'i temsil eder */}
       {/* ornegin bu ayşenin story kısmı */}
       <Tab></Tab>
       {/* ornegin bu mehmetin story kısmı */}
       <Tab></Tab>
       <Tab></Tab>
       <Tab></Tab>
       <Tab></Tab>
       <Tab></Tab>
       </View>
       </ScrollView>
    );
   }
   
 const Tab=({children})=>{
    return(
      <Pressable
      onPress={()=>{
       Alert.alert("you pressed "+children);
      }}
       style={{
        padding:8,
        backgroundColor:"rgba(0,0,0,0,3)",
        borderRadius:32,
        borderWidth:1,
        borderColor:"rgba(0,1,1,0,5)",
        marginRight:5,
         width:60,
        height:60,
         margin:10,

       
       }}>
      
      </Pressable>
  
     
    );
  }

  
  const Tap=({children})=>{
    return(
      <Pressable
      onPress={()=>{
       Alert.alert("you pressed ");
      }}
      
       style={{
        position:"absolute",
        bottom:0,
        right:0,
        padding:8,
        backgroundColor:"rgba(0,0,0,0,3)",
        borderRadius:8,
        borderWidth:1,
        borderColor:"rgba(0,1,1,0,5)",
        marginRight:5,
        width:30,
        height:30,
        
       
       }}>
      <View>
      {children}
      </View>
      </Pressable>
  
     
    );
  }
     
   
 
   
   export default Story;