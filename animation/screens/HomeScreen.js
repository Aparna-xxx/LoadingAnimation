import { View , StyleSheet, Text} from 'react-native';




function HomeScreen(){
    return (
        <View style={styles.container}>
        <View style={styles.welcome}>
             <Text style={styles.text}>Hellooo😶‍🌫️</Text>
             </View>
        </View>
      );

}

export default HomeScreen;

const styles = StyleSheet.create({
  text:{
    fontSize: 20,
    fontWeight:'200',
    color: '#001F5B',
    fontSize:30,
  },
    container: {
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      flex: 1,
      // backgroundColor: '#F8DE7E',
      backgroundColor:"#EEF5FF",
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome: {
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      
    }
  });

