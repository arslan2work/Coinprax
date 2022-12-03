import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
import backpro from '../assets/backpro.png'

const BGColor = "#2C1262"

const Portfolio = props => {

    const navigation = useNavigation();
    return (
        <View style={{
            backgroundColor: BGColor,
            height: '100%'
        }}>
            <Image source={backpro} style={{

                position: "absolute",
                width: '100%',
                height: '100%'
            }} />
            
            <View style={{
                width: '100%',
                height: '40%',
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <View style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    backgroundColor: 'white',
                    justifyContent: "center",
                    alignItems: 'center',
                    position: "absolute",
                    opacity: 0.4
                }}>
                </View>
                <View style={{
                    width: 170,
                    height: 170,
                    borderRadius: 100,
                    backgroundColor: 'orange',
                    justifyContent: "center",
                    alignItems: 'center',
                    position: "absolute",
                    opacity: 0.3
                }}>
                </View>
                <View style={{
                    width: 130,
                    height: 130,
                    borderRadius: 100,
                    backgroundColor: '#140533',
                    justifyContent: "center",
                    alignItems: 'center',
                    position: "absolute",
                    opacity: 1
                }}>
                </View>
                                <Text style={{color: 'white', fontSize: 30, fontWeight: "bold", position: "absolute"}}>$0.00</Text>
            </View>

            <TouchableOpacity
            onPress={() => navigation.navigate('AssetValue')}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>

                <Image source={down} style={{marginTop: 7, marginRight: 5}}/>
                <Text style={{ color: 'white'}}>PORTFOLIO VALUE</Text>
            </View>
                </TouchableOpacity>



            <View style={{
                height: '18%',
                width: '100%',
            }}>
                <ScrollView
                horizontal= {true}
                showsHorizontalScrollIndicator= {false}
                >




{/* first */}



                    <View style={{
                        height:95,
                        width: 250,
                        marginTop: 10,
                        marginLeft: 20,
                        borderRadius: 20,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <View style={{
                            height: '100%',
                            width: '33%',
                            backgroundColor: '#1B0B3B',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity style={{
                                alignItems: "center"
                            }}
                                onPress={() => navigation.navigate('Send')} 
                                >
                            <View style={{
                                backgroundColor:'#451F91',
                                height: 50,
                                width: 50,
                                marginTop: 10,
                                borderRadius: 50,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Image source={send}/>
                            </View>
                            <View style={{
                                height: '20%',
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: "center"
                            }}>
                                
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 15,
                                        fontWeight: "bold"
                                    }}>Send</Text>
                            </View>
                                </TouchableOpacity>
                        </View>
                        <View style={{
                            height: '100%',
                            width: '33%',
                            backgroundColor: '#451F91',
                            alignItems: "center"
                        }}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('Recieve')} 
                                >
                            <View style={{
                                backgroundColor:'#1B0B3B',
                                height: 50,
                                width: 50,
                                marginTop: 10,
                                borderRadius: 50,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Image source={rec}/>
                            </View>
                            <View style={{
                                height: '20%',
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: "center"
                            }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 15,
                                        fontWeight: "bold"
                                    }}>Recieve</Text>
                            </View>
                                </TouchableOpacity>
                        </View>
                        <View style={{
                            height: '100%',
                            width: '34%',
                            backgroundColor: '#1B0B3B',
                            alignItems: "center"
                        }}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('ExchangeStart')} 
                                style={{
                                    alignItems: "center"
                                }}
                                >
                             <View style={{
                                backgroundColor:'#451F91',
                                height: 50,
                                width: 50,
                                marginTop: 10,
                                borderRadius: 50,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Image source={exc}/>
                            </View>
                            <View style={{
                                height: '20%',
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: "center"
                            }}>
                                
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 15,
                                        fontWeight: "bold"
                                    }}>Exchange</Text>
                            </View>
                                </TouchableOpacity>
                        </View>
                    </View>



{/* second */}

                    <View style={{
                        height:95,
                        width: 250,
                        marginTop: 10,
                        marginRight: 10,
                        marginLeft: 10,
                        borderRadius: 20,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: "#1B0B3B",
                    }}>
                        <View>
                            <Image source={map} style={{
                                position: "absolute",
                                bottom: -20,
                                left: -50,
                                width: 300,
                                resizeMode: "contain"
                            }}/>

                            <View style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <View style={{
                                    height: '100%',
                                    width: '20%',

                                }}>
                                    <View style={{
                                        width: 35,
                                        height: 35,
                                        backgroundColor: '#29005E',
                                        marginLeft: 10,
                                        marginTop: 20,
                                        borderRadius:50,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Image source={eth} />

                                    </View>

                                </View>


{/* second */}
                                <View style={{
                                    height: '100%',
                                    width: '80%',
                                    
                                }}>
                                    <View style={{
                                        width: "100%",
                                        height: '55%',
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        borderBottomColor: '#E5E5E5',
                                        borderBottomWidth: 1,
                                        
                                    }}>
                                        <TouchableOpacity
                                        onPress={() => navigation.navigate('CoinDetails')}
                                        >
                                        <View style={{
                                            marginTop: 10,
                                            marginLeft: 10
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>ETH</Text>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 14,
                                                marginTop: 2
                                            }}>Ethereum</Text>
                                        </View>
                                        </TouchableOpacity>
                                        <View View style={{
                                            marginTop: 10,
                                            marginRight: 20
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>0</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: "100%",
                                        height: '50%',
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        
                                    }}>
                                        <View style={{
                                            marginTop: 10,
                                            marginLeft: 10
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>$3084.10</Text>
                                        </View>
                                        <View View style={{
                                            marginTop: 10,
                                            marginRight: 20
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>+1.73%</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>








            <View style={{
                width: '100%',
                height: '25%',
                alignItems: "center"

            }}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                >


                    {/* first */}
                    <View style={{
                        height:95,
                        width: 340,
                        marginTop: 10,
                        borderRadius: 20,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: "#1B0B3B",
                    }}>
                        <View>
                            <Image source={map} style={{
                                position: "absolute",
                                bottom: -20,
                                left: -50,
                                width: 300,
                                resizeMode: "contain"
                            }}/>

                            <View style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <View style={{
                                    height: '100%',
                                    width: '20%',

                                }}>
                                    <View style={{
                                        width: 35,
                                        height: 35,
                                        backgroundColor: '#29005E',
                                        marginLeft: 10,
                                        marginTop: 20,
                                        borderRadius:50,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Image source={eth} />

                                    </View>

                                </View>


{/* second */}
                                <View style={{
                                    height: '100%',
                                    width: '80%',
                                    
                                }}>
                                    <View style={{
                                        width: "100%",
                                        height: '55%',
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        borderBottomColor: '#E5E5E5',
                                        borderBottomWidth: 1,
                                        
                                    }}>
                                        <View style={{
                                            marginTop: 10,
                                            marginLeft: 10
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>ETH</Text>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 14,
                                                marginTop: 2
                                            }}>Ethereum</Text>
                                        </View>
                                        <View View style={{
                                            marginTop: 10,
                                            marginRight: 20
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>0</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: "100%",
                                        height: '50%',
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        
                                    }}>
                                        <View style={{
                                            marginTop: 10,
                                            marginLeft: 10
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>$3084.10</Text>
                                        </View>
                                        <View View style={{
                                            marginTop: 10,
                                            marginRight: 20
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>+1.73%</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>

                    {/* second */}

                    <View style={{
                        height:95,
                        width: 340,
                        marginTop: 10,
                        borderRadius: 20,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: "#1B0B3B",
                    }}>
                        <View>
                            <Image source={map} style={{
                                position: "absolute",
                                bottom: -20,
                                left: -50,
                                width: 300,
                                resizeMode: "contain"
                            }}/>

                            <View style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <View style={{
                                    height: '100%',
                                    width: '20%',

                                }}>
                                    <View style={{
                                        width: 35,
                                        height: 35,
                                        backgroundColor: '#207C6D',
                                        marginLeft: 10,
                                        marginTop: 20,
                                        borderRadius:50,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Image source={t} />

                                    </View>

                                </View>


{/* second */}
                                <View style={{
                                    height: '100%',
                                    width: '80%',
                                    
                                }}>
                                    <View style={{
                                        width: "100%",
                                        height: '55%',
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        borderBottomColor: '#E5E5E5',
                                        borderBottomWidth: 1,
                                        
                                    }}>
                                        <View style={{
                                            marginTop: 10,
                                            marginLeft: 10
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>ETH</Text>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 14,
                                                marginTop: 2
                                            }}>Ethereum</Text>
                                        </View>
                                        <View View style={{
                                            marginTop: 10,
                                            marginRight: 20
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>0</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: "100%",
                                        height: '50%',
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        
                                    }}>
                                        <View style={{
                                            marginTop: 10,
                                            marginLeft: 10
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>$3084.10</Text>
                                        </View>
                                        <View View style={{
                                            marginTop: 10,
                                            marginRight: 20
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>+1.73%</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>



                    {/* third */}

                    <View style={{
                        height:95,
                        width: 340,
                        marginTop: 10,
                        borderRadius: 20,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: "#1B0B3B",
                    }}>
                        <View>
                            <Image source={map} style={{
                                position: "absolute",
                                bottom: -20,
                                left: -50,
                                width: 300,
                                resizeMode: "contain"
                            }}/>

                            <View style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <View style={{
                                    height: '100%',
                                    width: '20%',

                                }}>
                                    <View style={{
                                        width: 35,
                                        height: 35,
                                        backgroundColor: '#160033',
                                        marginLeft: 10,
                                        marginTop: 20,
                                        borderRadius:50,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Image source={sola} />

                                    </View>

                                </View>


{/* second */}
                                <View style={{
                                    height: '100%',
                                    width: '80%',
                                    
                                }}>
                                    <View style={{
                                        width: "100%",
                                        height: '55%',
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        borderBottomColor: '#E5E5E5',
                                        borderBottomWidth: 1,
                                        
                                    }}>
                                        <View style={{
                                            marginTop: 10,
                                            marginLeft: 10
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>ETH</Text>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 14,
                                                marginTop: 2
                                            }}>Ethereum</Text>
                                        </View>
                                        <View View style={{
                                            marginTop: 10,
                                            marginRight: 20
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>0</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: "100%",
                                        height: '50%',
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        
                                    }}>
                                        <View style={{
                                            marginTop: 10,
                                            marginLeft: 10
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>$3084.10</Text>
                                        </View>
                                        <View View style={{
                                            marginTop: 10,
                                            marginRight: 20
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontWeight: "bold"
                                            }}>+1.73%</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>

                    {/* forth */}


                    <View style={{
                        height:95,
                        width: 340,
                        marginTop: 10,
                        borderRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 2,
                        borderColor: 'white',
                        borderStyle: "dotted"
                    }}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('AddAsset')}>
                        <Text style={{
                            color: 'white',
                            fontSize: 17,
                            fontWeight: 'bold'
                        }}>
                            Add More
                        </Text>
                        </TouchableOpacity>
                        
                    </View>



                </ScrollView>
            </View>






            <View style={{
                alignItems: "center"
            }}>
                <View style={{
                            height:70,
                            width: 200,
                            marginTop: 10,
                            borderRadius: 50,
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            backgroundColor: '#2C1262',
                            elevation: 7
                        }}>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('Portfolio')}

                            style={{
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
                                    <Image source={pie}/>
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
                                    <Image source={exchange}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={{
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
                            </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}

export default Portfolio