# assignment-1-merve-naz

Projede instagram'ın anasayfası yapıldı.

App.js dosyasındaki app componentin de Ust ,Story ve Gonderi olmak uzere 3 tane component olusturdum.

## <ScrollView  contentInsetAdjustmentBehavior="automatic" >
    <Ust /> 
    <Story/>
    <Gonderi>
</ScrollView> 

* Ust componenti banner.js dosyasında bulunur.Amacı instagramin en ust kısmında yer alan Instagram yazısı ve aynı satırda bulunan dm,bildirim gibi ayarların bulunduğu kısımdır.
Ust componentini oluşturmak için ise  Text ve Tabs componentiniden  yararlandım.
  
## const Ust = () =>{
    return(
       <View style={{display:"flex" , flexDirection:"row",justifyContent:"space-between",margin:10}}>
        <Text style={{fontSize:18,
       fontWeight:"600",marginLeft:10}}>INSTAGRAM</Text>
           <Tabs/>
       </View>
    )
   }
  
Text componentinin amacı INSTAGRAM yazısını yazdırmak ve  Tabs componentinin amacı ise  dm,bildirim gibi  ayarları gostermek içindi.
  
* 2.ana componentim olan Story kısmına geçelim.Story Hikaye.js kısmında yer almaktadir.Burada sadece kullanıcıların story sekmesıni icerir.
  
##  const Story = () =>{
    return(
        <ScrollView  horizontal >
       <View style={{display:"flex" , flexDirection:"row",width:"100%",marginBottom:10}} >

       <View style={{postion:"relative"}}> 
       <Tab/>
       <Tap>
       <Icon name="minus" size={60} color="#9007"></Icon>
       </Tap>
       </View>
       <Tab/>
      <Tab></Tab>
       <Tab></Tab>
       <Tab></Tab>
       </View>
       </ScrollView>
    ); }
  
Buradaki Tab her bir kisinin story'sini temsil etmektedir. Tap componenti ise  ilk baştaki story nesnesininde olan stroy ekleme kısmını temsil etmektedir.
  
 * 3.ana componentim olan Gonderi  kısmına geçelim.Bu component Gonderi.js dosyasında yer almaktadir.Burada Paylaşan kısının <br>resmi ve username'i (Baslık componenti) , <br> paylaşılan resim (Image) ve <br> altında yer alan begeni gibi butonlar ve
  yorumlar kısmını yapsayan(Durum) componentinden oluşur.
   
  ## const Gonderi =({username})=>{
  
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
    );}
  
  Temel dizayn bu şekildedir.Kodlar içerisinde de daha ayrıntılı açıklamalar da bulunmaktadır.
assignment-1-merve-naz created by GitHub Classroom
