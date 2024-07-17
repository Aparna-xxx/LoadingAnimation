import { View, StyleSheet,Text } from "react-native";
import Colours from "../util/Colours";
function PsgButton(props){
        return(
            <View style={[styles.customButton,props.style]}>
                <Text style={[styles.customButtonText,props.textStyle]}>{props.title}</Text>
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
        height:60,
        borderRadius:50,
        justifyContent:'center',
        marginTop:20,
        
      },
      customButtonText:{
        color:'white',
      }
})