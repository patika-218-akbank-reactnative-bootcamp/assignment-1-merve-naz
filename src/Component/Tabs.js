import React from 'react';


import {Tab} from  './Banner';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
 
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Durum componenti  EXPORT DEFAULTTUR.Burası Gonderinin altında yer alan kısımdır.(3'lu butonları(begen,gönder.yorum yap gibi) ve begeniler ve yorum componentinin hepsini  içerir)
//bu yuzden de  durum componenti gonderi kısmında cagrıldı.
const Durum = ({username}) =>{
    return(
      <View>
        {/* bu  icerdeki view gonderinin altındaki o (3'lü butondur)*/}
      <View style={{display:"flex" , flexDirection:"row",margin:10}}> 
       <Tab>Begen</Tab> 
        <Tab>Gonder</Tab>
        <Tab>YORUM YAP</Tab>
        <Icon name="help" size={20}> </Icon>
      </View>

{/* bu begeni componenti cagrılarak begen kısıler gosteririr */}
      <Begeni/>
      {/* resmi paylasanın resim hakkındakı yorumudur */}
      <Yorum title={username}/>
      </View>
    );
   };


  // Sadece paylaşan kişinin yorum kısmını ıcerır
   const Yorum=({title})=>{
    return(
    <View style={{display:"flex" , flexDirection:"row"}}>
    <Text style={{ fontWeight:"800"}} >{title}</Text>
    <Text> Canım kedim </Text>
    </View>
    );
  };


  // kim begendi kısmını ıcerirler.
   const Begeni=()=>{
     return(
      <View style={{display:"flex" , flexDirection:"row"}}>
       
        <View style={{display:"flex" , flexDirection:"row",marginRight:10}}>
          {/* herbir BegenenKisi componenti  bir kişiyi gösterir. */}
        <BegenenKisi></BegenenKisi>
        <BegenenKisi></BegenenKisi>
        <BegenenKisi></BegenenKisi>
        <BegenenKisi></BegenenKisi>
        
        </View>

      {/* BURASIDA BEGENELERIN ISIMLERINI GOSTERİR. */}
      <Text style={{margin:5}}>Merve and other people liked </Text>  
     
      </View>
     );
   }



  //  BEGENEN KISIDIR.UZERİNE BASINCA ONUN PROFİLİNE GİDER BU YUZDEN PRESSABLE YAPTIM.FAKAT YONLENDIRMEYI GORMENIGIMIZ İCİN O KISMI YAPAMADIM.
   const BegenenKisi=({})=>{
    return(
      <Pressable
      onPress={()=>{
       Alert.alert("you pressed ");
      }}
       style={{
       
        backgroundColor:"rgba(0,0,0,0,3)",
        borderRadius:32,
        borderWidth:1,
        borderColor:"rgba(0,1,1,0,5)",
        marginRight:-8,
         width:30,
        height:30,
        
       
       }}>
      
      </Pressable>
  
     
    );
  }
   export default Durum;
 