import { View , StyleSheet, Text, ImageBackground,SafeAreaView, StatusBar} from 'react-native';
import Colours from '../util/Colours';



function HomeScreen(){
    return (      
        <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={Colours.SplashBg} barStyle='dark-content'  />
          <View style={styles.container}>
            <ImageBackground source={require("../assets/images/psg.jpg")} style={styles.backgroundContainer} imageStyle={styles.backgroundImage}>
              <View style={styles.contentContainer}>
                  <View style={styles.cardContainer}>
                    <Text >Welcome to the PSG App</Text>
                  </View>
              </View>
            </ImageBackground>
          </View>
        </SafeAreaView>
       
      );

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
      marginTop:20,
      
    },
    backgroundContainer: {
      flex: 1,
      width:'100%',
    },
    backgroundImage: {
      resizeMode:'cover',
      opacity:0.5,
    },
    cardContainer:{
      height:'80%',
      backgroundColor:Colours.SplashBg,
      borderRadius:20,
      width:'85%',
      opacity:0.8,
      padding:10,
      alignItems:'center'
    }
  });

