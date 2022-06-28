import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


export default function HomeScreen({navigation}) {
    const w = Dimensions.get("window").width;
    const h = Dimensions.get("window").height;

    const [money,setMoney] = useState(0)
    const [billings,setBillings] = useState(0)
    const [bill,setBill] = useState(false)
    
    const billing =()=>{
      if (bill) {
        setMoney(billings)
      }
    }

    const process= async()=>{ 
      setBill(true)
    }


    useEffect(()=>{
      billing()
    },[bill])
  return (
    <SafeAreaView style={styles.container}>
        <View style={{backgroundColor:"#23233d",width:w-20,alignSelf:"center",marginTop:10,borderRadius:4,alignItems:"center",justifyContent:"center",padding:10}}>
          <Text style={{color:"white",fontWeight:"bold",fontSize:22,padding:5}}>Budget</Text>
          <TextInput keyboardType='numeric' onChangeText={(e)=> setBillings(e)} style={{borderColor:"gray",borderWidth:1,width:"85%",marginTop:5,borderRadius:5,backgroundColor:"white",paddingLeft:5,fontSize:18,height:50}} placeholder="Enter your budget"/>
            <TouchableOpacity onPress={()=>process()} style={{backgroundColor:"#6206bf",width:"40%",height:40,alignItems:"center",justifyContent:"center",borderRadius:3,marginTop:10,borderWidth:1,borderColor:"gray"}}><Text style={{color:"white"}}>Billing</Text></TouchableOpacity>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
        <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-9175158862258817/2718236839"
  servePersonalizedAds="true" />
        </View>
        <ScrollView>
        <TouchableOpacity onPress={()=> navigation.navigate('Details',{money: money * 35 /100,type:"food"})} style={{width:w-20,alignSelf:"center",backgroundColor:"#23233d",marginTop:10,padding:20,borderRadius:4,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <Text style={{color:"white"}}>
            FOOD: {money * 35 /100}
          </Text>
          <Text>
          <AntDesign name="arrowright" size={24} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Details',{money: money * 19 /100,type:"shopping"})} style={{width:w-20,alignSelf:"center",backgroundColor:"#23233d",marginTop:10,padding:20,borderRadius:4,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <Text style={{color:"white"}}>
            SHOPPING: {money * 19 /100}
          </Text>
          <Text>
          <AntDesign name="arrowright" size={24} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Details',{money: money * 12 /100,type:"health"})} style={{width:w-20,alignSelf:"center",backgroundColor:"#23233d",marginTop:10,padding:20,borderRadius:4,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <Text style={{color:"white"}}>
            HEALTH: {money * 12 /100}
          </Text>
          <Text>
          <AntDesign name="arrowright" size={24} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Details',{money: money * 10 /100,type:"education"})} style={{width:w-20,alignSelf:"center",backgroundColor:"#23233d",marginTop:10,padding:20,borderRadius:4,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <Text style={{color:"white"}}>
            EDUCATION: {money * 10 /100}
          </Text>
          <Text>
          <AntDesign name="arrowright" size={24} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Details',{money: money * 8 /100,type:"internet"})} style={{width:w-20,alignSelf:"center",backgroundColor:"#23233d",marginTop:10,padding:20,borderRadius:4,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <Text style={{color:"white"}}>
            INTERNET: {money * 8 /100}
          </Text>
          <Text>
          <AntDesign name="arrowright" size={24} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Details',{money: money * 16 /100,type:"savings"})} style={{width:w-20,alignSelf:"center",backgroundColor:"#23233d",marginTop:10,padding:20,borderRadius:4,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <Text style={{color:"white"}}>
            Savings: {money * 16 /100}
          </Text>
          <Text>
          <AntDesign name="arrowright" size={24} color="white" />
          </Text>
        </TouchableOpacity>
        </ScrollView>
        
  
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1,
  },
});
