import React,{useContext,useEffect, useState} from 'react';
import { Context as AuthContext} from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import {View,Button,StyleSheet,Text,FlatList,TouchableOpacity,ImageBackground,Image} from 'react-native';
import Spacer from './Components/Spacer';
import GlobalContex from './context/CContex';
import Server from './api/Server';
import ProductListComp from './Components/ProductListComp';
import StartButton from './Components/StartButton';
import PharmListComp from './Components/PharmListComp';
import GreenButton from './Components/GreenButton';
import CancelButton from './Components/CancelButton';
import PassDeliveryButton from './Components/PassDeliveryButton';
import RedButton from './Components/RedButton';
import BlueButton from './Components/BlueButton';
const ViewOrderScreen=(props)=>{
    let newStatus;
    const{changestatus}=useContext(AuthContext);
    const order = props.navigation.state.params.order;
    let orderdproducts = order.products;
    console.log('The products is:',orderdproducts)
    const pharm=props.navigation.state.params.pharm;
    console.log('The order has been viewed by the pharm ',order);
    console.log('the pharm is',pharm);
    return(
        <ImageBackground source={require("../Screens/images/img.jpeg")} style={{ width: '100%', height: '100%' }}>
  <SafeAreaView style={{ height: '80%' }}>
     <View style={styles.newcontainer}>
  <Image
    source={require("../Screens/images/NOVILL-02-03.png")}
    style={{ width: '20%',
    height: '150%',marginTop:30}}
  />
  <Text style={styles.tex1}>New Order</Text>
</View>
    <Text style={{ fontSize: 25, fontWeight: 'bold', marginVertical: 10, left: 10, top:40,color:'#706F6A' }}>{order.user.Fname} {order.user.Lname}</Text>
    <Spacer />
    <FlatList
      data={orderdproducts}
      style={{ top:25,left:15 }}
      renderItem={({ item }) => {
        return <ProductListComp style={styles.item} name={item.prodname} price={item.price +'$'} image={item.image} onPress={()=>console.log('Product has been clicked')}/>;
      }}                                                                                     //onPress={()=>props.navigation.navigate('PharmStore',{pharm:item})}
    />
          <View>
        <Text style={styles.text}>products: {order.amount}</Text>
        <Text style={styles.text}>Address: {order.address.city} {order.address.street}, {order.address.building}</Text>
        <Text style={styles.text}>The total is: {order.prise + '$'}</Text>
        {order.status === 'New' ? (
          <StartButton title="Start" onPress={() => {newStatus='Processing'; changestatus({order,newStatus})}} />
        ) : order.status === 'Ready' ? (
          <PassDeliveryButton title="Ready, notify the delivery" onPress={() => console.log('WaitingForDelivery')} />
        ) : (
          <View style={styles.views}>
                    <PassDeliveryButton title="Pass to delivery" onPress={() => PassTheOrderToDelivery(order,props)}/>

          <CancelButton title="Cancel" onPress={() => console.log('Rejected')} />
          </View>
        )}
      </View>
  </SafeAreaView>
</ImageBackground>
        );
}
const PassTheOrderToDelivery=async(order,props)=>{
  const pharm=order.pharm;
  const response = await Server.post('/PassOrderToDelivery',{
    order,pharm
  });
  const orders=response.data.orders;
  const p = response.data.pharm;
  props.navigation.navigate('OrdersList',{pharm:p,orders:orders});
}

const styles=StyleSheet.create({


    container: {
  flex: 1,
  backgroundColor: '#fff',
  paddingTop: 10,
  paddingHorizontal: 10,

},
item: {
  marginTop: 20,
  padding: 10,
  backgroundColor: '#fff',
  fontSize: 20,
},
cartContainer: {
  position: 'absolute',
  bottom: 20,
  right: 20,
},
cartImage: {
  width: 50,
  height: 50,
  borderRadius: 25,
},
 newcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
views:{
  bottom:-50,
  justifyContent:'space-between'
},
text:{
 fontSize: 20,
    color: '#32322F',
    marginLeft: 10,
    top:80,
  
},
tex1: {
    marginLeft: 10,
    fontSize: 25,
    marginTop:30,
    fontWeight: 'bold',
    borderColor:'green'
  },
});

export default ViewOrderScreen;
