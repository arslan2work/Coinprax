import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import bg from '../assets/bg.png';
import back from '../assets/back.png';
import dotted from '../assets/dotted.png';
import search from '../assets/search.png';
import bitcoin from '../assets/bitcoin.png';
import ether from '../assets/ether.png';
import tether from '../assets/tether.png';
import pie from '../assets/pie2.png'
import dash from '../assets/dash.png'
import exchange from '../assets/echange.png'
import cam from '../assets/cam.png'
import res from '../assets/res.png'
import gear from '../assets/gear.png'



const BGColor = "#1B0B3B"

const Sync = props => {



    const navigation = useNavigation();
    return (
        <View style={{
            backgroundColor: BGColor,
            height: '100%',
            alignItems: "center"
        }}>
            <View style={{
                height: '12%',
                width: '100%',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 10
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Portfolio')}>
                    <Image source={back} />
                </TouchableOpacity>
                <Text style={{
                    color: 'white',
                    fontWeight: "600",
                    fontSize: 18
                }}>Sync Devices</Text>
                <View></View>

            </View>

            <Image source={cam} style={{
                width: '80%',
                height: 250,
                resizeMode: "contain"
            }} />

            <Text style={{
                marginTop: 20,
                fontSize: 20,
                fontWeight: "bold",
                color: 'white'
            }}> Scan QR Code</Text>

            <Text style={{
                marginTop: 5,
                fontSize: 10,
                color: 'white'
            }}>Open Metacoin Desktop. Go to Settings,</Text>
            <Text style={{
                marginTop: 5,
                fontSize: 10,
                color: 'white'
            }}>then Devices, then click the Sync button.</Text>

            <View style={{
                width: '80%',
                height: 50,
                backgroundColor: '#2C1262',
                borderRadius: 10,
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>

                <Image style={{
                    height: 20,
                    width: 20,
                    marginLeft: 20
                }} source={gear} />
                <Text style={{
                    marginLeft: 20,
                    color: 'white'
                }}>Settings</Text>
                <Text style={{
                    marginLeft: 10,
                    color: 'white'
                }}>></Text>
                <Text style={{
                    marginLeft: 10,
                    color: 'white'
                }}>Devices</Text>
                <Text style={{
                    marginLeft: 10,
                    color: 'white'
                }}>></Text>
                <TouchableOpacity onPress={() => navigation.navigate('SyncDevices')} style={{
                    marginLeft: 10,
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 10
                    }}>Sync Devices</Text>
                </TouchableOpacity>

            </View>









        </View>
    )
}

export default Sync