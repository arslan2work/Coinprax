import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { View, Text, Animated, Image, Button, TouchableOpacity } from "react-native";

import Logo from '../assets/logo.png';
import jetBack from '../assets/jet.png';
import stars from '../assets/stars.png'
import elipse1 from '../assets/Ellipse1.png'
import elipse2 from '../assets/Ellipse2.png'


const LandingPage = props => {

    const BGColor = "#1B0B3B"

    const navigation = useNavigation();

    return (
        <View style={{
            height: '100%'
        }}>
            <Image source={stars} style={{
                    width: '100%',
                    height: '100%',
                    position: "absolute"
                }} />
                


                
            <View style={{
                height: '50%',
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image source={Logo} style={{
                    width: 200,
                    height: 250,
                    resizeMode: "contain"
                }}></Image>
            </View>
            <View style={{
                width: '100%',
                height: '25%',
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Welcome to</Text>
                    <Text style={{
                        fontSize: 42,
                        fontWeight: "bold",
                        color: 'white'
                    }}>Coinprax</Text>
            </View>
            <View style={{
                height: '20%',
                width: '100%',
                alignItems: 'center'
            }}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('GetStarted')} 
                style={{
                    backgroundColor: '#0D0938',
                    paddingVertical: 15,
                    paddingHorizontal: 55,
                    borderRadius: 50,
                }}>
                    <Text style={{
                        color: 'white'
                    }}>Create an account</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{
                    backgroundColor: '#451F91',
                    marginTop: 10,
                    paddingVertical: 15,
                    paddingHorizontal: 55,
                    borderRadius: 50,
                }}>
                    <Text style={{
                        color: 'white'
                    }}>Create an account</Text>
                </TouchableOpacity>
            </View>
           
            
        </View>
    );
}



export default LandingPage