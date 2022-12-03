import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import BackBre from '../assets/bre.png';
import third from '../assets/3.png';


const ThirdSlide = props => {
    const navigation = useNavigation();
    const BGColor = "#2C1262"
    return (  
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: BGColor
        }}>
            <Image source={BackBre} style={{
                width: '100%',
                height: 420,
                marginTop: -70
            }}/>

            <Image source={third} style={{
                width: 200,
                resizeMode: "contain",
                alignSelf: "center",
                position: "absolute",
                top: -30
            }}/>

            <View style={{
                marginTop: 50,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 23
                }}>Exchange</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 13
                }}>Exchange 100+ crypto assets
                </Text>
                  <Text style={{
                    color: 'white',
                    fontSize: 13
                }}>anytime, right in the app</Text>
            </View>


            <View style={{
                height: '20%',
                width: '100%',
                alignItems: 'center',
                justifyContent: "center"
            }}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('OnboardEnd')} 
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 18
                    }}>Next</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf:"center"
            }}>
                <View style={{ width: 10, height: 10, backgroundColor: '#929090', borderRadius: 50, }}></View>
                <View style={{ width: 10, height: 10, backgroundColor: '#929090', borderRadius: 50, }}></View>
                <View style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: 50}}></View>
            </View>
            
        </View>
      )
}

export default ThirdSlide