import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, Dimensions, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';




import bg from '../assets/bg.png';
import back from '../assets/back.png';
import down from '../assets/don.png'
import send from '../assets/send.png'
import rec from '../assets/rec.png'
import clock from '../assets/clock.png'
import bnb from '../assets/bnb.png'
import link from '../assets/link.png'
import exchange from '../assets/exc.png'
import exchangeactive from '../assets/echange.png'
import eth from '../assets/ether.png'
import pie from '../assets/pie2.png'
import dash from '../assets/dashactive.png'
import lock from '../assets/lock.png'
import print from '../assets/print.png'
import shield from '../assets/shield.png'
import stars from '../assets/stars.png'
import sc from '../assets/sc.png'
import dim from '../assets/dim.png'
import book from '../assets/book.png'
import round from '../assets/round.png'
import tic from '../assets/tic.png'

const BGColor = "#1B0B3B"


const Support = props => {

    const [isEnabled, setisEnabled] = useState(false);
    const toggleSwitch = () => setisEnabled(previousState => !previousState);

    const navigation = useNavigation();



    return (
        <View style={{
            backgroundColor: BGColor,
            height: '100%',
            alignItems: "center"
        }}>
            <View style={{
                position: "absolute",
                width: '100%',
                height: '40%',
                backgroundColor: '#533590',
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Image style={{
                    position: "absolute"
                }} source={stars}/>
                <Image style={{
                    position: "absolute",
                    right: 20,
                    top: 50,
                    width: 80, height: 70
                }} source={dim}/>
                <Image style={{
                    position: "absolute",
                    left: -60,
                    bottom: -60,
                    width: 180, height: 150
                }} source={dim}/>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: "bold"
                }}>Thank you</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: "bold"
                }}>for using METCINS</Text>

            </View>
            <View style={{
                height: '12%',
                width: '100%',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 20
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Dashboard')}>
                    <Image source={back} />
                </TouchableOpacity>
                <Text style={{
                    color: 'white',
                    fontSize: 18
                }}>Support</Text>
                <View style={{
                   width: 10
                }}>
                    
                </View>


            </View>
            
            <View style={{
                width: '80%',
                height: 70,
                backgroundColor: '#2C1262',
                marginTop: 200,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Image style={{
                    marginLeft: 20
                }} source={book} />
                <View>
                    <Text style={{
                        color: 'white',
                        fontWeight: '300',
                        fontSize: 14,
                        marginLeft: 10
                    }}>Knowledge Base</Text>
                    <Text style={{
                        color: 'white',
                        fontWeight: '100',
                        fontSize: 10,
                        marginLeft: 10
                    }}>Common questions and support docs</Text>
                </View>
            </View>

            <View style={{
                width: '80%',
                height: 70,
                backgroundColor: '#2C1262',
                marginTop: 10,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Image style={{
                    marginLeft: 20
                }} source={round} />
                <View>
                    <Text style={{
                        color: 'white',
                        fontWeight: '300',
                        fontSize: 14,
                        marginLeft: 15
                    }}>Transaction History</Text>
                    <Text style={{
                        color: 'white',
                        fontWeight: '100',
                        fontSize: 10,
                        marginLeft: 15
                    }}>Export your history into .csv file</Text>
                </View>
            </View>

            <View style={{
                width: '80%',
                height: 70,
                backgroundColor: '#2C1262',
                marginTop: 10,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Image style={{
                    marginLeft: 20
                }} source={tic} />
                <View>
                    <Text style={{
                        color: 'white',
                        fontWeight: '300',
                        fontSize: 14,
                        marginLeft: 15
                    }}>Status</Text>
                    <Text style={{
                        color: 'white',
                        fontWeight: '100',
                        fontSize: 10,
                        marginLeft: 15
                    }}>Get live status updates about Metacoin</Text>
                </View>
            </View>
            
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: '60%',
                height: 100
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 10
                }}>Privacy Policy</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 10
                }}>Terms of Service</Text>
            </View>





        </View>
    )
}

export default Support