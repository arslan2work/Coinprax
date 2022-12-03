import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';




import bg from '../assets/bg.png';
import down from '../assets/don.png'
import send from '../assets/send.png'
import rec from '../assets/rec.png'
import clock from '../assets/clock.png'
import bnb from '../assets/bnb.png'
import link from '../assets/link.png'
import exchange from '../assets/exc.png'
import exchangeactive from '../assets/excactive.png'
import eth from '../assets/ether.png'
import pie from '../assets/pie2.png'
import dash from '../assets/dash.png'

const BGColor = "#1B0B3B"


const Exchange = props => {
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
                    onPress={() => navigation.navigate('Portfolio')}>

                </TouchableOpacity>
                <Text style={{
                    color: 'white',
                    fontWeight: "bold",
                    fontSize: 18
                }}>Exchange</Text>
                <View>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={clock} />
                </View>

            </View>


            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: '85%',
                borderBottomColor: '#2C1262',
                borderBottomWidth: 1,
                paddingBottom: 30
            }}>
                <View>
                    <View>
                        <Text style={{
                            color: 'white'
                        }}>I have 0 BNB</Text>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 4,
                            alignItems: "center"
                        }}>
                            <Image source={bnb} />
                            <Text style={{
                                color: 'white',
                                marginLeft: 10,
                                marginRight: 10,
                                fontSize: 17,
                                fontWeight: "bold"
                            }}>BNB</Text>
                            <Image source={link} />
                        </View>
                    </View>
                </View>
                <View style={{
                    alignItems: "flex-end"
                }}>
                    <Text style={{
                        color: 'white'
                    }}>$0.00</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: "bold"
                    }}>0.00</Text>
                </View>
            </View>


            <View style={{
                height: 50,
                width: 50,
                backgroundColor: '#2C1262',
                borderRadius: 50,
                position: "relative",
                left: 130,
                bottom: 25,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image source={exchange} />
            </View>

            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: '85%',
                paddingBottom: 30
            }}>
                <View>
                    <View>
                        <Text style={{
                            color: 'white'
                        }}>I want Ethereum</Text>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 4,
                            alignItems: "center"
                        }}>
                            <Image source={eth} />
                            <Text style={{
                                color: 'white',
                                marginLeft: 10,
                                marginRight: 10,
                                fontSize: 17,
                                fontWeight: "bold"
                            }}>ETH</Text>
                            <Image source={link} />
                        </View>
                    </View>
                </View>
                <View style={{
                    alignItems: "flex-end"
                }}>
                    <Text style={{
                        color: 'white'
                    }}>$0.00</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: "bold"
                    }}>0.00</Text>
                </View>
            </View>

            <View style={{
                width: '70%',
                height: 60,
                backgroundColor: '#2C1262',
                borderRadius: 50,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <Text style={{
                    color: 'white'
                }}>Min</Text>
                <Text style={{
                    color: 'white'
                }}>Half</Text>
                <Text style={{
                    color: 'white'
                }}>Max</Text>

            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('ConnectWallet')}
                style={{
                    width: '70%',
                    height: 60,
                    backgroundColor: '#2C1262',
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10
                }}>
                <Text style={{
                    color: 'white'
                }}>Make Exchange</Text>
            </TouchableOpacity>

            <View style={{
                marginTop: 60,
                alignItems: "center"
            }}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold'
                }}>1  bnb = 11.84131 ETH</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 10
                }}>Exchange services are available through</Text>
                <Text style={{
                    color: 'white',
                    fontSize: 10
                }}>third-party API providers.</Text>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Portfolio')} style={{
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

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Exchange')} style={{
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
                    </TouchableOpacity>
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

export default Exchange