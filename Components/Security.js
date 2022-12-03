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

const BGColor = "#1B0B3B"


const Security = props => {

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
                height: '12%',
                width: '100%',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Dashboard')}>
                    <Image source={back} />
                </TouchableOpacity>
                <Text style={{
                    color: 'white',
                    fontWeight: "bold",
                    fontSize: 18
                }}>Security</Text>
                <View style={{
                    width: 25,
                    height: 25,
                    backgroundColor: '#2C1262',
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: 'white'
                    }}>?</Text>
                </View>


            </View>




            <TouchableOpacity style={{
                width: '85%',
                height: 150,
                backgroundColor: '#2C1262',
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                paddingTop: 20
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={shield} />

                </View>
                <View>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: '70%',
                        borderBottomColor: "white",
                        borderBottomWidth: 1,
                        paddingBottom: 10
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 17,
                            marginLeft: 10
                        }}>Shares</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 17,
                            marginLeft: 10
                        }}> &gt </Text>
                    </View>
                    <View>
                        <Text style={{
                            color: 'white',
                            fontSize: 11,
                            marginLeft: 10,
                            marginTop: 12
                        }}>Your secret 12-words recover phrase is the</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 11,
                            marginLeft: 10,
                        }}>ONLY way to recover your funds if you lose</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 11,
                            marginLeft: 10,
                        }}>access to your wallet.</Text>
                    </View>
                </View>

            </TouchableOpacity>

            <View style={{
                width: '85%',
                height: 150,
                backgroundColor: '#2C1262',
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                paddingTop: 20,
                marginTop: 10
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={lock} />

                </View>
                <View>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: '80%',
                        borderBottomColor: "white",
                        borderBottomWidth: 1,
                        paddingBottom: 10
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 17,
                            marginLeft: 10
                        }}>Secure with Passcode</Text>
                        <Switch
                            trackColor={{ false: '#160033', true: '#160033'}}
                            thumbColor={ isEnabled ? '#29005E' : '#6800EF'}
                            onValueChange={toggleSwitch}
                            value= {isEnabled}
                            style={{
                                transform: [{scaleX: 1}, {scaleY: 1}],
                                height: 20,
                                marginLeft: 20
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{
                            color: 'white',
                            fontSize: 11,
                            marginLeft: 10,
                            marginTop: 12
                        }}>Keep your assets safe by enabling passcode
                        </Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 11,
                            marginLeft: 10,
                        }}>protection</Text>
                    </View>
                </View>

            </View>


            <View style={{
                width: '85%',
                height: 150,
                backgroundColor: '#2C1262',
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                paddingTop: 20,
                marginTop: 10
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={print} />

                </View>
                <View>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: '100%',
                        borderBottomColor: "white",
                        borderBottomWidth: 1,
                        paddingBottom: 10
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 17,
                            marginLeft: 10
                        }}>Security with Fingerprint</Text>
                        
                    </View>
                    <View>
                        <Text style={{
                            color: 'white',
                            fontSize: 11,
                            marginLeft: 10,
                            marginTop: 12
                        }}>Add a passcode to activate Fingerprint

                        </Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 11,
                            marginLeft: 10,
                        }}>protection.</Text>
                    </View>
                </View>

            </View>






            <View style={{
                alignItems: "center"
            }}>
                <View style={{
                    height: 70,
                    width: 200,
                    marginTop: 10,
                    borderRadius: 50,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: '#2C1262',
                    elevation: 7
                }}>
                    <View style={{
                        height: '100%',
                        width: '33%',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            height: 50,
                            width: 50,
                            marginTop: 10,
                            borderRadius: 50,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Image source={pie} />
                        </View>

                    </View>
                    <View style={{
                        height: '100%',
                        width: '33%',
                        alignItems: "center"
                    }}>
                        <View style={{
                            height: 50,
                            width: 50,
                            marginTop: 10,
                            borderRadius: 50,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Image source={exchangeactive} />
                        </View>
                    </View>
                    <View style={{
                        height: '100%',
                        width: '34%',
                        alignItems: "center"
                    }}>
                        <View style={{
                            height: 50,
                            width: 50,
                            marginTop: 10,
                            borderRadius: 50,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Dashboard')}>

                                <Image source={dash} />

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Security