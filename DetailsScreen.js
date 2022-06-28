import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


export default function DetailsScreen({navigation,route}) {
    const w = Dimensions.get("window").width;
    const h = Dimensions.get("window").height;

    const [money,setMoney] = useState(route.params.money)
    const [week1,setWeek1] = useState(40)
    const [week2,setWeek2] = useState(20)
    const [week3,setWeek3] = useState(25)
    const [week4,setWeek4] = useState(15)

const loaded = async ()=>{
  try {
    await AdMobInterstitial.setAdUnitID('ca-app-pub-9175158862258817/2718236839'); // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
  } catch (error) {
    console.log(error)
  }
}


loaded();



    useEffect(()=>{
        const type = route.params.type
        if (type == "food" && money > 1000) {
            setWeek1(40)
            setWeek2(20)
            setWeek3(25)
            setWeek4(15)
            }
            if (type == "food" && money < 1000) {
                setWeek1(35)
                setWeek2(30)
                setWeek3(25)
                setWeek4(10)
                }
                if (type =="shopping" && money > 1000) {
                    setWeek1(20)
                    setWeek2(50)
                    setWeek3(20)
                    setWeek4(10)
                    }
                    if (type =="shopping" && money < 1000) {
                        setWeek1(25)
                        setWeek2(35)
                        setWeek3(25)
                        setWeek4(15)
                        }
                        if (type =="health") {
                            setWeek1(25)
                            setWeek2(25)
                            setWeek3(25)
                            setWeek4(25)
                            }
                            if (type =="education") {
                                setWeek1(25)
                                setWeek2(25)
                                setWeek3(25)
                                setWeek4(25)
                                }
                                if (type =="internet") {
                                    setWeek1(25)
                                    setWeek2(25)
                                    setWeek3(25)
                                    setWeek4(25)
                                    }
                                    if (type =="savings") {
                                        setWeek1(25)
                                        setWeek2(25)
                                        setWeek3(25)
                                        setWeek4(25)
                                        }
                
    },[])
  return (
    <SafeAreaView style={styles.container}>
       <View style={{width:w,padding:20}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <FontAwesome name="calendar" size={24} color="black" /><Text style={{fontSize:21,fontWeight:"bold",letterSpacing:1,marginLeft:5}}>WEEK 1</Text>
        </View>
        <Text style={{marginLeft:30,fontSize:19}}>{money * week1/100}</Text>
       </View>
       <View style={{width:w,padding:20}}>
       <View style={{flexDirection:"row",alignItems:"center"}}>
       <FontAwesome name="calendar" size={24} color="black" /><Text style={{fontSize:21,fontWeight:"bold",letterSpacing:1,marginLeft:5}}>WEEK 2</Text>
        </View>
        <Text style={{marginLeft:30,fontSize:19}}>{money * week2/100}</Text>
       </View>
       <View style={{width:w,padding:20}}>
       <View style={{flexDirection:"row",alignItems:"center"}}>
       <FontAwesome name="calendar" size={24} color="black" /><Text style={{fontSize:21,fontWeight:"bold",letterSpacing:1,marginLeft:5}}>WEEK 3</Text>
        </View>
        <Text style={{marginLeft:30,fontSize:19}}>{money * week3/100}</Text>
       </View>
       <View style={{width:w,padding:20}}>
       <View style={{flexDirection:"row",alignItems:"center"}}>
       <FontAwesome name="calendar" size={24} color="black" /><Text style={{fontSize:21,fontWeight:"bold",letterSpacing:1,marginLeft:5}}>WEEK 4</Text>
        </View>
        <Text style={{marginLeft:30,fontSize:19}}>{money * week4/100}</Text>
       </View>
        
        
        
  
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1,
  },
});
