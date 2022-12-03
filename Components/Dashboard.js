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
import exchangeactive from '../assets/echange.png'
import eth from '../assets/ether.png'
import pie from '../assets/pie2.png'
import dash from '../assets/dashactive.png'
import f from '../assets/f.png'
import e from '../assets/e.png'
import d from '../assets/d.png'
import c from '../assets/c.png'
import b from '../assets/b.png'
import g from '../assets/g.png'
import a from '../assets/a.png'
import h from '../assets/h.png'

const BGColor = "#1B0B3B"


const Dashboard = props => {
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
            }}><TouchableOpacity
                onPress={() => navigation.navigate('Portfolio')}>

                </TouchableOpacity>
                <Text style={{
                    color: 'white',
                    fontWeight: "bold",
                    fontSize: 18
                }}>Exchange</Text>
                <View>
                </View>

            </View>




            <TouchableOpacity style={{
                width: '85%',
                height: 50,
                backgroundColor: '#2C1262',
                borderRadius: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#160033',
                    borderRadius: 50,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={f} />

                </View>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 17,
                    marginLeft: 10
                }}>Shares</Text>

            </TouchableOpacity>



            <TouchableOpacity style={{
                width: '85%',
                height: 50,
                backgroundColor: '#2C1262',
                borderRadius: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#160033',
                    borderRadius: 50,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={e} />

                </View>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 17,
                    marginLeft: 10
                }}>FTX</Text>

            </TouchableOpacity>

            <TouchableOpacity style={{
                width: '85%',
                height: 50,
                backgroundColor: '#2C1262',
                borderRadius: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#160033',
                    borderRadius: 50,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={d} />

                </View>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 17,
                    marginLeft: 10
                }}>Buy Crypto</Text>

            </TouchableOpacity>


            <TouchableOpacity style={{
                width: '85%',
                height: 50,
                backgroundColor: '#2C1262',
                borderRadius: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#160033',
                    borderRadius: 50,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={c} />

                </View>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 17,
                    marginLeft: 10
                }}>Lightening</Text>

            </TouchableOpacity>


            <TouchableOpacity style={{
                width: '85%',
                height: 50,
                backgroundColor: '#2C1262',
                borderRadius: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#160033',
                    borderRadius: 50,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={b} />

                </View>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 17,
                    marginLeft: 10
                }}>Assets</Text>

            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => navigation.navigate('Security')}
                style={{
                    width: '85%',
                    height: 50,
                    backgroundColor: '#2C1262',
                    borderRadius: 50,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10
                }}>
                <View style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#160033',
                    borderRadius: 50,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={g} />

                </View>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 17,
                    marginLeft: 10
                }}>Security</Text>

            </TouchableOpacity>


            <TouchableOpacity style={{
                width: '85%',
                height: 50,
                backgroundColor: '#2C1262',
                borderRadius: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#160033',
                    borderRadius: 50,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={h} />

                </View>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 17,
                    marginLeft: 10
                }}>Settings</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Support')}
                style={{
                    width: '85%',
                    height: 50,
                    backgroundColor: '#2C1262',
                    borderRadius: 50,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10
                }}>
                <View style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#160033',
                    borderRadius: 50,
                    marginLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} source={a} />

                </View>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 17,
                    marginLeft: 10
                }}>Support</Text>

            </TouchableOpacity>




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
                    <TouchableOpacity style={{
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
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Portfolio')}>
                                <   Image source={pie} />
                            </TouchableOpacity>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Exchange')}
                        style={{
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

export default Dashboard