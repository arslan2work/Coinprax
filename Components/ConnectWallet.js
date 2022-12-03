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
import bar from '../assets/bar.png'
import res from '../assets/res.png'



const BGColor = "#1B0B3B"

const ConnectWallet = props => {



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
                }}>Connect Wallet</Text>
                <View></View>

            </View>

            <TouchableOpacity
            onPress={() => navigation.navigate('Scan')}
             style={{
                width: '80%',
                height: 200,
                backgroundColor: '#2C1262',
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image source={bar} />
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                    marginTop: 10
                }}>Scan a QR code from Metacoin</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                }}>on others device.</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 19,
                    marginTop: 10
                }}>Scan QR Code</Text>
            </TouchableOpacity>


            <View style={{
                width: '80%',
                height: 200,
                backgroundColor: '#2C1262',
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20
            }}>
                <Image source={res} />
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                    marginTop: 10
                }}>Type your 12-word secret
                </Text>
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                }}>backup phrase.</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 19,
                    marginTop: 10
                }}>Type secret Phrase</Text>
            </View>








        </View>
    )
}

export default ConnectWallet