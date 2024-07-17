import { View, StyleSheet,Text } from "react-native";
import Colours from "../util/Colours";
function PsgButton(props){
        return(
            <View style={styles.customButton}>
                <Text style={styles.customButtonText}>{props.title}</Text>
            </View>  
        )
}

export default PsgButton;

const styles= StyleSheet.create({
    customButton:{
        width:'85%',
        //backgroundColor:'#CCCCFF',
        backgroundColor:Colours.DarkBlue100,      
        alignItems:'center',
        marginTop:'2%',
        height:'25%',
        borderRadius:50,
        justifyContent:'center'
        
        
      },
      customButtonText:{
        color:'white',
      }
})