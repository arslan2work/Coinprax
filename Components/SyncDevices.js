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

const SyncDevices = props => {



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

                <View style={{
                    width: '80%',
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: '#2C1262',
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: 'white',
                        marginLeft: 20
                    }}>1</Text>
                    <Text style={{
                        color: 'white',
                        marginLeft: 20
                    }}>*************</Text>
                </View>

                <View style={{
                    width: '80%',
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: '#2C1262',
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10
                }}>
                    <Text style={{
                        color: 'white',
                        marginLeft: 20
                    }}>2</Text>
                    <Text style={{
                        color: 'white',
                        marginLeft: 20
                    }}>*************</Text>
                </View>
                <View style={{
                    width: '80%',
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: '#2C1262',
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10
                }}>
                    <Text style={{
                        color: 'white',
                        marginLeft: 20
                    }}>3</Text>
                    <Text style={{
                        color: 'white',
                        marginLeft: 20
                    }}>*************</Text>
                </View>
                <View style={{
                    width: '80%',
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: '#2C1262',
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10
                }}>
                    <Text style={{
                        color: 'white',
                        marginLeft: 20
                    }}>4</Text>
                    <Text style={{
                        color: 'white',
                        marginLeft: 20
                    }}>*************</Text>
                </View>








        </View>
    )
}

export default SyncDevices