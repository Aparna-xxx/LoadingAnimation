import React from 'react';
import { View, StyleSheet, Text, ImageBackground, SafeAreaView, StatusBar, TextInput, KeyboardAvoidingView,Platform,ScrollView } from 'react-native';
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
import PsgButton from '../components/PsgButton';

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={Colours.WhiteBlue200} barStyle="dark-content" />
      {/* <View style={styles.container}> */}
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled='false'
      >
        <ImageBackground
          source={require("../assets/images/psg.jpg")}
          style={styles.backgroundContainer}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.contentContainer}>
            <View style={styles.cardTransparentContainer}></View>
            <View style={styles.cardOpaqueContainer}>
              <Text style={styles.cardTitleText}>Log into Food Zone</Text>
              <View style={styles.loginBox}>
                <TextInput style={styles.loginText} placeholder="college ID" />
                <TextInput style={styles.loginText} placeholder="Password" />
              </View>
              <PsgButton title="Login" />
              <Text style={styles.miniText}>Not a registered user? <Text style={styles.signup}>Sign up</Text> now !</Text>            
            </View>
           
          </View>
        </ImageBackground>
      {/* </View> */}
      </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '200',
    color: Colours.DarkBlue,
    fontSize: 30,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: Colours.WhiteBlue200,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: '100%',
    paddingBottom: '8%',
  },
  backgroundContainer: {
    flex: 1,
    width: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover',
    opacity: 0.8,
  },
  cardTransparentContainer: {
    height: '60%',
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '93%',
    opacity: 0.5,
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  cardTitleText: {
    color: Colours.DarkBlue100,
    fontFamily: 'Manrope_500Medium',
    fontSize: 28,
  },
  cardOpaqueContainer: {
    position: 'absolute',
    top: '26%',
    left: '2%',
    right: '2%',
    alignItems: 'center',
    borderRadius: 10,
  },
  loginBox: {
    width: '85%',
  },
  loginText: {
    marginTop: '10%',
    paddingHorizontal: '5%',
    height: '30%',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: Colours.White300,
    borderColor: "#000000",
  },
  signup:{
    color:Colours.LinkRed,
    textDecorationLine:'underline',

  },
  miniText:{
    color:Colours.DarkBlue100,
    paddingTop:'2%',
    fontWeight:'bold'

  }
});
