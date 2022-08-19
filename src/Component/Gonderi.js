import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Durum from  './Tabs';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions
} from 'react-native';

const imageWidth=Dimensions.get("screen").width;

// bu kısımda kisinin profil resmi ve username ve karsınında bulunan uç noktalı simgeyi icerir. gönderinin en üst kısmıdı.
const Baslik=({username})=>{
   
      return(
        <View style={{display:"flex" , flexDirection:"row",justifyContent:"space-between",width:imageWidth}}>
          <View style={{display:"flex" , flexDirection:"row",margin:10}}>
            <ProfileImage/>
            <Text style={{margin:10}}>{username}</Text>
           </View>
           <View>
               <Icon name="paperclip" size={40}></Icon>
          </View>
        </View>
      )
  }

  // ben resimİ local olarak aldım(src/assets/images)
  const ProfileImage =()=>{
    return(
    <View >
       
       <Image style={{borderRadius:64,width:60 ,height:60,}} source={require("../assets/images/mn.png")}></Image>
    
    </View>
    );
}

// bu kısım paylaşımın kendısıdır(baslık componenti ile göndericinin resmi ve username'mini ıcerir .Image componenti ile de paylasılan resmi iceririr
//durum componenti  ile de altaki begeni  gonder gibi 3'lu butonlar,begenenler ve paylaşan kisinin  resim ile ilgili  yorumlarının hepsini içerir)
  const Gonderi =({username})=>{
  ;
    return(
    <View style={styles.Ust}>
      <View >
          <View style={styles.Container}>
            <Baslik username={username}  > </Baslik>
            <Image source={require("../assets/images/kedi.png")} style={{width:imageWidth,height:200}}></Image>
          </View>
      </View>
    <View>
      <Durum username={username}/>
    </View>
    </View>   
    );
}


const styles=StyleSheet.create({
    
  Container:{
      width:imageWidth,
      height:300,
      
      marginTop:20,
    },
   Ust:{
      borderWidth:1,
      borderColor:"black",
     
   }
});

export default Gonderi ;