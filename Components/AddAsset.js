import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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


const BGColor = "#1B0B3B"

const AddAsset = props => {


    const [isEnabled, setisEnabled] = useState(false);
    const toggleSwitch = () => setisEnabled(previousState => !previousState);

    const navigation = useNavigation();
    return (
        <View style={{
            backgroundColor: BGColor,
            height: '100%'
        }}>
            <View style={{
                height: '12%',
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
                <Image source={dotted} style={{
                    height: 18,
                    resizeMode: "contain"
                }} />

            </View>



            <View style={{
                height: '8%',
                alignItems: "center"
            }}>
                <Text style={{
                    color:'white',
                    fontSize: 12
                }}>Enable assets to add them to your portfolio</Text>
                <Text style={{
                    color:'white',
                    fontSize: 12
                }}>Assets with balances can’t be disabled.</Text>
            </View>


            <View style={{
                width: '85%',
                height: 50,
                backgroundColor: '#2C1262',
                alignSelf: "center",
                display: "flex",
                flexDirection: "row",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Image source={search} />
                <TextInput
                placeholder="Search..."
                placeholderTextColor={"white"}
                style={{
                    width: 200,
                    marginLeft: 30,
                    color: 'white'
                }}/>

            </View>






            <View style={{
                paddingTop: 10,
                height: '59%',
                width: '100%',
                alignItems: 'center'
            }}>
                

                {/* first */}
                <View style={{
                    width: '85%',
                    height: '17%',
                    backgroundColor: '#2C1262',
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <View style={{
                        height: '100%',
                        width: '20%',
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image source={bitcoin} />
                    </View>

                    <View style={{
                        height: '100%',
                        width: '60%',
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Bitcoin</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 12,
                        }}>0 BTC</Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Switch 
                            trackColor={{ false: '#160033', true: '#160033'}}
                            thumbColor={ isEnabled ? '#29005E' : '#6800EF'}
                            onValueChange={toggleSwitch}
                            value= {isEnabled}
                            style={{
                                transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                                height: 30
                            }}
                        />
                    </View>

                </View>

                {/* second */}

                <View style={{
                    width: '85%',
                    height: '17%',
                    backgroundColor: '#2C1262',
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 5
                }}>
                    <View style={{
                        height: '100%',
                        width: '20%',
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image source={bitcoin} />
                    </View>

                    <View style={{
                        height: '100%',
                        width: '60%',
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Wrapped Bitcoin</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 12,
                        }}>0 soBTC</Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Switch 
                            trackColor={{ false: '#160033', true: '#160033'}}
                            thumbColor={ isEnabled ? '#29005E' : '#6800EF'}
                            onValueChange={toggleSwitch}
                            value= {isEnabled}
                            style={{
                                transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                                height: 30
                            }}
                        />
                    </View>

                </View>


                {/* third */}

                <View style={{
                    width: '85%',
                    height: '17%',
                    backgroundColor: '#2C1262',
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 5
                }}>
                    <View style={{
                        height: '100%',
                        width: '20%',
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image source={ether} />
                    </View>

                    <View style={{
                        height: '100%',
                        width: '60%',
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Ethereum</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 12,
                        }}>0 ETH</Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Switch 
                            trackColor={{ false: '#160033', true: '#160033'}}
                            thumbColor={ isEnabled ? '#29005E' : '#6800EF'}
                            onValueChange={toggleSwitch}
                            value= {isEnabled}
                            style={{
                                transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                                height: 30
                            }}
                        />
                    </View>

                </View>

                {/* fourth */}

                <View style={{
                    width: '85%',
                    height: '17%',
                    backgroundColor: '#2C1262',
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 5
                }}>
                    <View style={{
                        height: '100%',
                        width: '20%',
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image source={ether} />
                    </View>

                    <View style={{
                        height: '100%',
                        width: '60%',
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Wrapped Ethereum</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 12,
                        }}>0 soETH</Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Switch 
                            trackColor={{ false: '#160033', true: '#160033'}}
                            thumbColor={ isEnabled ? '#29005E' : '#6800EF'}
                            onValueChange={toggleSwitch}
                            value= {isEnabled}
                            style={{
                                transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                                height: 30
                            }}
                        />
                    </View>

                </View>

                {/* fifth */}


                <View style={{
                    width: '85%',
                    height: '17%',
                    backgroundColor: '#2C1262',
                    borderRadius: 10,
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 5
                }}>
                    <View style={{
                        height: '100%',
                        width: '20%',
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image source={tether} />
                    </View>

                    <View style={{
                        height: '100%',
                        width: '60%',
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Tether USD</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 12,
                        }}>0 USDT</Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Switch 
                            trackColor={{ false: '#160033', true: '#160033'}}
                            thumbColor={ isEnabled ? '#29005E' : '#6800EF'}
                            onValueChange={toggleSwitch}
                            value= {isEnabled}
                            style={{
                                transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                                height: 30
                            }}
                        />
                    </View>

                </View>

                
            </View>


            <View style={{
                alignItems: "center"
            }}>
            <View style={{
                        height:70,
                        width: 200,
                        borderRadius: 50,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: '#2C1262'
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
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Portfolio')}>
                                <Image source={pie}/>
                                </TouchableOpacity>
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
                                

                                    <Image source={exchange}/>
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
                                <Image source={dash}/>
                            </View>
                        </View>
                    </View>
            </View>


            
            
        </View>
    )
}

export default AddAsset