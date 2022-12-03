import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import BackBre from '../assets/bre.png';
import end from '../assets/end.png';


const OnboardEnd = props => {
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

            <Image source={end} style={{
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
                }}>All in One Place</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 13
                }}>Keep track of all your crypto in one,
                
                </Text>
                  <Text style={{
                    color: 'white',
                    fontSize: 13
                }}>simple wallet. No account required</Text>
            </View>


            <View style={{
                height: '20%',
                width: '100%',
                alignItems: 'center',
                marginTop: 50
            }}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Portfolio')} 
                style={{
                    backgroundColor: '#0D0938',
                    paddingVertical: 15,
                    width: 300,
                    borderRadius: 50,
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: 'white'
                    }}>Get Started</Text>
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
                
            </View>
            
        </View>
      )
}

export default OnboardEnd