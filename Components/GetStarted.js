import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import bg from '../assets/bg.png';
import logobg from '../assets/backlogo.png'
import gif from '../assets/giphy.gif'

const BGColor = "#2C1262"

const GetStarted = props => {

    const navigation = useNavigation();
    return (
        <View style={{
            backgroundColor: BGColor,
            height: '100%'
        }}>
            <View>
                <Image source={bg} style={{
                    width: '100%',
                    height: 480,
                    position: "absolute",
                    top: -130,
                    left: 0
                }}/>
            </View>

            <Image source={logobg} style={{
                height: '30%',
                width: '50%',
                resizeMode: "contain",
                alignSelf: "center",
                marginTop: 40
            }}/>

            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingTop:90
                }}>Secure & Easy to Use</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: "bold"
                }}>Crypto Wallet</Text>
            </View>

            <View style={{
                height: '20%',
                width: '100%',
                alignItems: 'center'
            }}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('FirstSlide')} 
                style={{
                    backgroundColor: '#0D0938',
                    paddingVertical: 15,
                    width: 300,
                    borderRadius: 50,
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: 'white'
                    }}>Create a wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{
                    backgroundColor: '#451F91',
                    paddingVertical: 15,
                    width: 300,
                    borderRadius: 50,
                    alignItems: "center",
                    marginTop: 5
                }}>
                    <Text style={{
                        color: 'white'
                    }}>Already have a wallet</Text>
                </TouchableOpacity>
                {/* <Text style={{
                    color: 'white',
                    marginTop: 20
                }}>Already have an account</Text> */}
            </View>
        </View>
    )
}

export default GetStarted