import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';




import bg from '../assets/bg.png';
import down from '../assets/don.png'
import send from '../assets/send.png'
import rec from '../assets/rec.png'
import stback from '../assets/stback.png'
import stfront from '../assets/stfront.png'
import mobile from '../assets/m.png'
import tick from '../assets/tick.png'

const BGColor = "#6800EF"


const ExchangeEnd = props => {
    const navigation = useNavigation();



    return (
        <View style={{
            backgroundColor: BGColor,
            height: '100%',
            alignItems: "center"
        }}>
            <Image style={{
                height: '65%',
                width: '100%',
                resizeMode: 'stretch'
            }} source={stback} />

            <Image style={{
                position : "absolute",
                width: '100%',
                top: -250
            }} source={stfront} />

            <View style={{
                width: '100%',
                justifyContent: "center",
                alignItems: "center",
                position: 'absolute',
                marginTop: 50,
            }}> 

            <Image source={mobile} style={{
                height: 380,
                width: 190,
            }} />
            </View>
            <Image style={{
                position: "absolute",
                height: 150,
                width: 150,
                marginTop: 200
            }} source={tick}/>

            <View style={{
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 23
                }}>Stake Your Assets</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 13
                }}>It’s simple: Earn more form holding
                </Text>
                  <Text style={{
                    color: 'white',
                    fontSize: 13
                }}>onto your crypto</Text>
            </View>

            <TouchableOpacity
            onPress={() => navigation.navigate('Exchange')} 
             style={{
                width: 150,
                height: 40,
                backgroundColor: '#1B0B3B',
                marginTop: 30,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    color: 'white'
                }}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ExchangeEnd