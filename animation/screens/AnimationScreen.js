import { View , StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';



function SplashScreen( ){
  

  
    return (
        <View style={styles.container}>
        <View style={styles.welcome}>
             <LottieView  autoPlay
                loop={false}
                style={{flex:1}}source={require('../assets/animations/chaiAnimation.json') }  />
             </View>
        </View>
      );

}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:'#A7C7E7',
      justifyContent: 'center',
    },
    welcome: {
      height:300,
      aspectRatio:1,
    }
  });
  