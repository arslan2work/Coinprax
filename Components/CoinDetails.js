import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SwitchSelector from "react-native-switch-selector";

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'



import bg from '../assets/bg.png';
import down from '../assets/don.png'
import send from '../assets/send.png'
import rec from '../assets/rec.png'
import exc from '../assets/exc.png'
import map from '../assets/map.png'
import eth from '../assets/eth.png'
import t from '../assets/t.png'
import sola from '../assets/sola.png'
import pie from '../assets/pie.png'
import dash from '../assets/dash.png'
import exchange from '../assets/echange.png'
import back from '../assets/back.png';
import cross from '../assets/cross.png';
import gear from '../assets/gear.png';
import bitcoin from '../assets/bitcoin.png';
import { LinearGradient } from "expo-linear-gradient";


const BGColor = "#2C1262"

const options = [
    { label: "Price", value: "1" },
    { label: "Balance", value: "2" }
];

const optionsBottom = [
    { label: "Activity", value: "1" },
    { label: "About", value: "2" },
    { label: "Video", value: "3" },
    { label: "Blog", value: "4" }
];



const CoinDetails = props => {
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
                    onPress={() => navigation.navigate('Portfolio')}
                    style={{
                        height: 20,
                        width: 20,
                        backgroundColor: '#140533',
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 50
                    }}>
                    <Image source={cross} />
                </TouchableOpacity>
                <Text style={{
                    color: 'white',
                    fontWeight: "bold",
                    fontSize: 18
                }}>BTC</Text>
                <View>
                    <Image source={gear} style={{
                        height: 20,
                        width: 20,
                        resizeMode: "contain"
                    }} />
                </View>

            </View>


            <LinearGradient
                colors={['#1B0B3B', 'transparent']}
                style={{
                    height: '85%',
                    width: '90%',
                    marginHorizontal: 20,
                    alignItems: "center"
                }}>
                <Image style={{
                    position: 'absolute',
                    top: -10,
                    width: 50,
                    height: 50,
                    resizeMode: "contain"
                }} source={bitcoin} />

                <View style={{
                    height: '10%',
                    marginTop: 50,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View style={{
                        width: '20%',
                        height: 50,
                        backgroundColor: '#451F91',
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottomRightRadius: 50,
                        borderTopRightRadius: 50
                    }}>
                        <Image source={send} />
                    </View>
                    <View style={{
                        width: '60%',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: "bold",
                                fontSize: 14
                            }}>$</Text>
                            <Text style={{
                                color: 'white',
                                fontWeight: "bold",
                                fontSize: 26
                            }}>47,128</Text>
                            <Text style={{
                                color: 'white',
                                fontWeight: "bold",
                                fontSize: 14
                            }}>.60</Text>
                        </View>
                        <View style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 8
                            }}>Change</Text>

                            <Text style={{
                                color: 'red',
                                fontSize: 8,
                                marginLeft: 4
                            }}>-0.50%</Text>
                        </View>
                    </View>
                    <View style={{
                        width: '20%',
                        height: 50,
                        backgroundColor: '#451F91',
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottomLeftRadius: 50,
                        borderTopLeftRadius: 50
                    }}>
                        <Image source={rec} />
                    </View>
                </View>
                <SwitchSelector
                    options={options}
                    initial={0}
                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                    buttonColor={'#451F91'}
                    style={{
                        marginTop: 10,
                        width: 160
                    }}
                />
                <View >
                    <LineChart
                        data={{
                            labels: ['', '', '', '', '', ''],
                            datasets: [{
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }]
                        }}
                        width={Dimensions.get('window').width - 40} // from react-native
                        height={170}
                        chartConfig={{
                            backgroundGradientFrom: '#160033',
                            backgroundGradientTo: '#6800EF',
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientToOpacity: 0,
                            labels: 'none',
                            
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 0,
                                height: 100,
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 10,
                            height: 100,
                            borderRadius: 0,
                            backgroundColor: 'transparent'
                        }}
                    />
                </View>

                <View style={{
                        width: '85%',
                        height: '10%',
                        borderTopWidth: 1,
                        borderTopColor: '#FFFFFF',
                        marginTop: 50,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"

                }}>
                    <View style={{
                        width: '50%',
                        marginVertical: 5,
                        alignItems: "center",
                        justifyContent: 'center',
                        borderRightWidth: 1,
                        borderRightColor: '#FFFFFF'
                    }}>
                        <Text style={{
                            color: '#451F91',
                            fontSize: 24,
                            fontWeight: "bold"
                        }}>0</Text>
                        <Text style={{
                            color: '#FFFFFF',
                            fontSize: 10,
                        }}>BTC</Text>
                    </View>
                    <View style={{
                        width: '50%',
                        marginVertical: 5,
                        alignItems: "center",
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: '#ffffff',
                            fontSize: 24,
                            fontWeight: "bold"
                        }}>$0.00</Text>
                        <Text style={{
                            color: '#FFFFFF',
                            fontSize: 10,
                        }}>Value</Text>
                    </View>
                    

                </View>

                <TouchableOpacity
                style={{
                    width: 180,
                    height: 50,
                    backgroundColor: '#451F91',
                    marginTop: 10,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems:"center"
                }}>
                    <Text style={{
                        color: 'white'
                    }}>Buy Crypto</Text>

                </TouchableOpacity>

                <SwitchSelector
                    options={optionsBottom}
                    initial={0}
                    backgroundColor={'#29005E'}
                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                    buttonColor={'#451F91'}
                    
                    style={{
                        marginTop: 10,
                        width: 300,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ffffff',
                        paddingBottom: 5
                    }}
                />
                <Text style={{
                    color:'white',
                    marginTop: 5,
                    fontSize: 10
                }}>
                    You dont have any BTC activity yet.
                </Text>





            </LinearGradient>

        </View>
    )
}

export default CoinDetails