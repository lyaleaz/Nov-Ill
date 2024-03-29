import React, { useState,useContext } from 'react';
import {View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import {Text,Input, Button} from 'react-native-elements';
import Spacer from './Components/Spacer'
import { Context as AuthContext} from './context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const AcceptPharmsScreen=()=>{
    const {state,acceptpharm,clearErrorMessage}=useContext(AuthContext);
    const [pname,setPnme] = useState(''); 
    return (
        <ImageBackground source={require("../Screens/images/background.jpg")} style={{ width:'100%', height:'100%' }} >
        <NavigationEvents onWillFocus={clearErrorMessage}/>
        <View style={styles.container}>
        <Spacer/>
        <Spacer/>
        
        <View style={{height:350,width:460,
                     borderTopLeftRadius:130,
                     paddingTop:175,
                     alignItems:'center',
                     right:30
                     }}>
        <Text style={{fontWeight:'bold',bottom:15,fontSize:25}}>Approve pharm store</Text>

        <TextInput
            placeholder='Pharm store name' 
            label="Pharm name"
            value={pname}
            onChangeText={setPnme}
            autoCapitalize="none"
            autoCorrect={false}
            style={{ 
               borderRadius:100,
               color:'black',
               paddingHorizontal:70,
               width:'65%',
               backgroundColor:'rgb(220,220,220)',
              marginBottom:20  
            }}
        />
        {state.errorMessage ?<Text style= {styles.errormsg}>{state.errorMessage}</Text>: null}
        <TouchableOpacity style={{
        backgroundColor:'#629630',
        padding:50,
        marginTop:30,
        borderRadius:100 ,
          alignItems: 'center',
        paddingVertical:10,
        marginVertical:5
    }} title="Accept" onPress={()=>acceptpharm({pname})} >
        <Text style={{color:'black',fontWeight:'bold' ,fontSize:16}}>Accept</Text>
     </TouchableOpacity>
        <Spacer/>
        </View>
        </View>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({});

export default AcceptPharmsScreen;