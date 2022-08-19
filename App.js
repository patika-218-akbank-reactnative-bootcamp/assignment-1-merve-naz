/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';


import Ust from './src/Component/Banner';
import Story from './src/Component/Hikaye';
import Gonderi from './src/Component/Gonderi';




const App=() => {

 
 
  return (
   
    <ScrollView  contentInsetAdjustmentBehavior="automatic" >
    
    {/* Ust dedigim  kısımda  Instagram logosu ve DM gibi işlevlerin bulundugu 3'lü kutuçuklar yer almaktadır. */}
      <Ust /> 
      {/* burası sadece hikaye bölümünü kapsar */}
     <Story/>
     {/* Gonderi dedigim component'de  paylasan  kişinin  profil resmi ve username'i, paylaşlan resim ,resmin altında yer alan 3 kutucuklu kısım
     (begen ,yorum yap,gonder )   ve kimlerin begendigi gibi kısımları kapsar */}
     <Gonderi username="@dream_world" />
     <Gonderi username="@merve_ naz" />
     <Gonderi username="@komedi_sayfa" />

  </ScrollView>
  );

};



export default App;
