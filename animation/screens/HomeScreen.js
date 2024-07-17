import React from 'react';
import { View, StyleSheet, Text, ImageBackground, SafeAreaView, StatusBar, TextInput, KeyboardAvoidingView,Platform,ScrollView,Modal,TouchableOpacity } from 'react-native';
import Colours from '../util/Colours';
import { useState } from 'react';
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
import { Ionicons } from '@expo/vector-icons';

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

  const [modalVisible, setModalVisible] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

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
              <Text style={styles.miniText}>
                  Not a registered user?{' '}
                  <Text style={styles.signup} onPress={toggleModal}>
                    Sign up
                  </Text>{' '}
                  now!
                </Text>            
            </View>
           
          </View>
        </ImageBackground>
      {/* </View> */}
      </KeyboardAvoidingView>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Ionicons name="close-circle-outline" size={32} style={styles.closeButtonText} />
              
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Sign Up</Text>
            <View style={styles.modalContent}>
              
              {/* Add your sign up options here */}
              
                <View style={styles.signupBox}>
                  <TextInput style={styles.loginText} placeholder="college ID" />
                  <TextInput style={styles.loginText} placeholder="Password" />
                  <PsgButton style={{ backgroundColor: 'white' }} textStyle={{ color: Colours.DarkBlue100, fontWeight:'bold', fontSize:20 }} title="sign up"/>
                  
                </View>
                
                </View>
          </View>
        </Modal>
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
    height: 55,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: Colours.White300,
    borderColor: "#000000",
    width:'100%'
  },
  signup:{
    color:Colours.LinkRed,
    textDecorationLine:'underline',

  },
  miniText:{
    color:Colours.DarkBlue100,
    paddingTop:'2%',
    fontWeight:'bold'

  },
  modalContainer: {
    height:'50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colours.WhiteBlue200,
    top:'20%',
    borderRadius:30,
    margin:10,
    justifyContent:'center'
  
    
  },
  modalContent: {
    backgroundColor: Colours.DarkBlue100,
    borderRadius: 30,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: 'Manrope_500Medium',
    color: Colours.DarkBlue100,
    marginBottom:20,
  },
 
  signupBox:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 50,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: Colours.DarkBlue100
  },
});
