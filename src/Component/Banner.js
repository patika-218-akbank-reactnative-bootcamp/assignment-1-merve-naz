import React from 'react';


import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';


const Ust = () =>{
    return(
       <View style={{display:"flex" , flexDirection:"row",justifyContent:"space-between",margin:10}}>
         {/* Instagram ve üçlü kutucukların yatayda biri bir kosede digeri diger kosede yer alması için justifyContent kullandım */}
          
           <Text style={{fontSize:18,
       fontWeight:"600",marginLeft:10}}>INSTAGRAM</Text>
           <Tabs/>
       </View>
    )
   }
   
   //3'lu kutucuların herbir (dm,kalp,home'un her biri)
 export  const Tab=({children})=>{
       return(
         <Pressable
         onPress={()=>{
           Alert.alert("you pressed "+children);
         }}
          style={{
           padding:8,
           backgroundColor:"rgba(0,0,0,0,3)",
           borderRadius:0,
           borderWidth:1,
           borderColor:"rgba(0,1,1,0,5)",
           marginRight:5
        
          
          }}>
     
         </Pressable>
     
        
       );
     }
   
  // Tabs componenti ise ınstagram yazısınnın karsısında bulunan 3'lü kutucukların hepsi(Tablerin hepsi)
  export   const Tabs=()=>{
       return(
           <View style={{display:"flex" , flexDirection:"row"}}> 
               <Tab>DM</Tab> 
               <Tab> Duyuru</Tab>
               <Tab>Begeniler</Tab>
           </View>
       );
     }
   
   export default Ust;