import { View , StyleSheet, Text, ImageBackground,SafeAreaView, StatusBar,TextInput} from 'react-native';
import Colours from '../util/Colours';
import {
  useFonts,
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';








function HomeScreen(){

  let [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });
  if (fontsLoaded) {
    return (      
        <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={Colours.SplashBg} barStyle='dark-content'  />
          <View style={styles.container}>
            <ImageBackground source={require("../assets/images/psg.jpg")} style={styles.backgroundContainer} imageStyle={styles.backgroundImage}>
              <View style={styles.contentContainer}>
                  <View style={styles.cardContainer}>
                    <View style={styles.cardTitleContainer}>
                      <Text style={styles.cardTitleText} >Log into Food Zone</Text>
                    </View>
                  </View>
              </View>
            </ImageBackground>
          </View>
        </SafeAreaView>
       
      );
    }

}

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
  },

  
  text:{
    fontSize: 20,
    fontWeight:'200',
    color: Colours.SplashText,
    fontSize:30,
  },
    container: {
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      flex: 1,
      // backgroundColor: '#F8DE7E',
      backgroundColor:Colours.SplashBg,
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },
    contentContainer: {
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      justifyContent:'flex-end',
      height:'100%',
      paddingBottom:'8%',         
    },
    backgroundContainer: {
      flex: 1,
      width:'100%',
    },
    backgroundImage: {
      resizeMode:'cover',
      opacity:0.8,
    },
    cardContainer:{
      height:'80%',
      backgroundColor:'#fff',
      borderRadius:20,
      width:'93%',
      opacity:0.7,
      paddingVertical:30,
      paddingHorizontal:10,
      alignItems:'center',
    },
    cardTitleText:{
      color:'#000',
      fontFamily:'Manrope_500Medium',
      fontSize:28,
     
    },
    
    cardTitleContainer:{
      marginBottom:40
    },
   
  });

