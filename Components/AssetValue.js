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


const BGColor = "#2C1262"

const AssetValue = props => {



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
                                <Image source={back}/>
                                </TouchableOpacity>
                <Text style={{
                    color: 'white',
                    fontWeight: "bold",
                    fontSize: 18
                }}>ASSETS</Text>
                <View></View>

            </View>





                <View style={{
                    width: '90%',
                    height: '85%',
                    borderRadius: 20,
                    marginBottom: 50,
                    overflow: "hidden"
                    
                }}>
                    <View style={{
                        display:"flex",
                        backgroundColor:'#1B0B3B',
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        paddingLeft: 50,
                        
                    }}>
                        <View style={{
                            backgroundColor: '#2C1262',
                            width: 100,
                            height: 100,
                            marginTop: 10,
                            borderRadius: 50,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <View style={{
                                width: '90%',
                                height: '90%',
                                borderRadius: 90,
                                borderWidth: 5,
                                borderColor: '#160033'
                            }}>
                                <View style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 90,
                                borderWidth: 1,
                                borderStyle: 'dotted',
                                borderColor: 'white',
                                justifyContent: "center",
                            alignItems: "center"
                            }}>
                                <Text style={{
                                    color: 'white'
                                }}>Summery</Text>

                                </View>

                            </View>

                        </View>


<View style={{
}}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            width: '60%',
                        }}>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 50,
                                    backgroundColor: '#FB8E14',
                                    marginTop: 5,
                                    marginRight: 5
                                }}></View>
                                <Text style={{
                                    color: 'white'
                                }}>BTC</Text>
                            </View>
                            <View>
                                <Text style={{
                                    color: 'white'
                                }}>0.00%</Text>
                            </View>

                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            width: '60%',
                        }}>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 50,
                                    backgroundColor: '#644F9B',
                                    marginTop: 5,
                                    marginRight: 5
                                }}></View>
                                <Text style={{
                                    color: 'white'
                                }}>ETH</Text>
                            </View>
                            <View>
                                <Text style={{
                                    color: 'white'
                                }}>0.00%</Text>
                            </View>

                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            width: '60%',
                        }}>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 50,
                                    backgroundColor: '#47AE72',
                                    marginTop: 5,
                                    marginRight: 5
                                }}></View>
                                <Text style={{
                                    color: 'white'
                                }}>SOL</Text>
                            </View>
                            <View>
                                <Text style={{
                                    color: 'white'
                                }}>0.00%</Text>
                            </View>

                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            width: '60%',
                        }}>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                            }}>
                                <View style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 50,
                                    backgroundColor: '#8D7421',
                                    marginTop: 5,
                                    marginRight: 5
                                }}></View>
                                <Text style={{
                                    color: 'white'
                                }}>SOL</Text>
                            </View>
                            <View>
                                <Text style={{
                                    color: 'white'
                                }}>0.00%</Text>
                            </View>

                        </View>
</View>


                    </View>








                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor:'#1B0B3B',
                        borderBottomWidth: 2

                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: 'white'
                        }}>$0.00</Text>
                        <Text style={{
                            fontSize: 14,
                            color: 'white'
                        }}>Total Balance</Text>

                    </View>

                    <LinearGradient 
                    colors={['#1B0B3B', 'transparent']}
                    style={{
                        width: '100%',
                        marginTop: 2,
                        height: '75%',

                    }}>
<View style={{
                            height:'60%'
                        }}></View>



                        <View style={{
                            height: '10%',}}></View>



                        <View style={{
                            height: '20%',
                            marginHorizontal: 10,
                            borderTopWidth: 1,
                            borderTopColor: '#ffffff',
                            display: "flex",
                            flexDirection:"row",
                            justifyContent: "space-around",
                            alignItems: "center"
                        }}>
                            <View style={{
                                alignItems: "center"
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontWeight: "bold",
                                    fontSize: 30
                                }}>$0.00</Text>
                                <Text style={{
                                    color: '#FFB900',
                                    fontSize: 12
                                }}>Change</Text>
                            </View>
                            <View style={{
                                alignItems: "center"
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontWeight: "bold",
                                    fontSize: 30
                                }}>-</Text>
                                <Text style={{
                                    color: '#FFB900',
                                    fontSize: 12
                                }}>Portfolio Age</Text>
                            </View>
                        </View>
                    </LinearGradient>

                    

                </View>





            
       </View>
    )
}

export default AssetValue