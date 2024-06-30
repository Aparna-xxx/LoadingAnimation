import { View , StyleSheet,  Animated, Easing,} from 'react-native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';


function SplashScreen( ){
  
  const moveAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;


  useEffect(() => {
    Animated.parallel([
      Animated.timing(moveAnim, {
        toValue: -100, // Adjust the value based on the screen size and your requirement
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.3,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, [moveAnim, scaleAnim]);

  
    return (
        <View style={styles.container}>
        <View style={styles.welcome}>
        <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [
              { translateY: moveAnim },
              { scale: scaleAnim },
            ],
          },
        ]}
      >
             <LottieView  autoPlay
                loop={false}
                style={styles.gifStyle}source={require('../assets/animations/loadFood.json') }  />
      </Animated.View>
             </View>
        </View>
      );

}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:'#EEF5FF',
      justifyContent: 'center',
      
    },
    welcome: {
      height:300,
      aspectRatio:1,
      alignItems:'center',
      justifyContent:'center',
    },
    animatedView: {
    width: 300,
    height: 300,
  
  },
  gifStyle: {
    flex:1,
    
  }
  });
  