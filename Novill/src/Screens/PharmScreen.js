import React from 'react';
import {View,Button,StyleSheet,Text,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from './Components/Spacer';



const PharmScreen=({navigation})=>{
    return(
        <ImageBackground source={require("../Screens/images/background.jpg")} style={{ width:'100%', height:'100%' }} >
        <View style={{alignItems:'center',marginTop:300}}> 
            <TouchableOpacity onPress={()=>navigation.navigate('SigninPharm')}
              style={{
      
    backgroundColor: '#fff',
 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,


    
    width:'90%',
 
    borderColor: 'green',
    alignItems:'center',
     borderWidth: 2,
        alignSelf:'flex-end',
      
    }}
            >
                    <Text style={{ color:'#000',fontSize:14,
   fontWeight:"bold"}}>Already have an account? Sign in here</Text>
            </TouchableOpacity>
            <Spacer/>
            <TouchableOpacity onPress={()=>navigation.navigate('SignupPharm')}
            style={{
     
    backgroundColor: '#fff',
 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 170,


    
    width:'90%',
 
    borderColor: 'green',
    alignItems:'center',
     borderWidth: 2,
        alignSelf:'flex-end',
       
        
    }}
            
            
            >
                <Text style={{ color:'#000',fontSize:12,
   fontWeight:"bold"}} >Don't have a pharmacy account? Sign Up here</Text>
            </TouchableOpacity>
            <Spacer/>
        </View>
</ImageBackground>
    );
}

const styles=StyleSheet.create({});

export default PharmScreen;


