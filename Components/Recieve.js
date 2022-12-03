import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, ScrollView, Alert, Modal, StyleSheet, Pressable, TextInput } from 'react-native';
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
import back from '../assets/back.png'
import dim from '../assets/dim.png'
import barcode from '../assets/barcode.png'
import right from '../assets/right.png'
import left from '../assets/left.png'
import recbar from '../assets/recbar.png'
import bitcoin from '../assets/bitcoin.png'
import ether from '../assets/ether.png'
import tether from '../assets/tether.png'
import bnb from '../assets/bnb.png'
import paypal from '../assets/paypal.png'
import credit from '../assets/credit.png'
import klarna from '../assets/klarna.png'


const BGColor = "#1B0B3B"

const Recieve = props => {
    const [modalVisible, setModalVisible] = useState(false);

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
                    fontSize: 18
                }}>RECIEVE BTC</Text>
                <View style={{
                    width: 10
                }}></View>

            </View>

            <Image source={dim} />

            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: '80%',
                marginTop: 5
            }}>
                <Image source={left} />
                <Image style={{
                    width: 200, height: 200
                }} source={recbar} />
                <Image source={right} />

            </View>
            <Text style={{
                color: 'white',
                fontWeight: 'bold',
                marginTop: 30
            }}>Your CRYPTO Address</Text>

            <View style={{
                width: '80%',
                height: 60,
                backgroundColor: '#2C1262',
                marginTop: 5,
                borderRadius: 10,
                
                alignItems: "center",
                justifyContent: "center",
            }}>
                <View style={{
                    width: '100%',
                    height: '50%',
                    alignItems: "center",
                justifyContent: "center",
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 12,
                        
                    }}>BARCODE&bih=937&biw=1920&rlz
                    </Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 12
                    }}>1C1CHZN_enPK986PK986&h</Text>
                </View>
            </View>

            <Text style={{
                color: 'white',
                fontWeight: 'bold',
                marginTop: 5,
                fontSize: 17
            }}>Tap CRYPTO Address to copy</Text>
            
            

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{
                            color: '#1B0B3B',
                            fontSize: 18,
                            fontWeight: "bold"
                        }}>Choose coin to buy.</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: '100%',
                            marginVertical: 20
                        }}>
                            <Image source={bitcoin} />
                            <Image source={bnb} />
                            <Image source={ether} style={{
                                height: 38,
                                width: 38
                            }} />
                            <Image source={tether} style={{
                                height: 38,
                                width: 38
                            }} />
                        </View>
                        <Text style={{
                            color: '#1B0B3B',
                            fontSize: 18,
                            fontWeight: "bold"
                        }}>Enter amount to buy.</Text>

                        <View style={{
                            borderColor: '#1B0B3B',
                            borderWidth: 2,
                            borderRadius: 10,
                            width: 200,
                            height: 40,
                            marginVertical: 20
                        }}>
                            <TextInput style={{
                                width: '100%',
                                height: '100%',
                                paddingHorizontal: 10
                            }}
                            placeholder="Enter value" />
                        </View>

                        <Text style={{
                            color: '#1B0B3B',
                            fontSize: 18,
                            fontWeight: "bold"
                        }}>Choose payment option.</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: '100%',
                            marginVertical: 20
                        }}>
                            <Image source={paypal} style={{
                                width: 40,
                                height: 40
                            }} />
                            <Image source={credit} style={{
                                width: 40,
                                height: 40
                            }} />
                            <Image source={klarna} style={{
                                width: 30,
                                height: 30,
                                borderRadius: 30
                            }} />
                        </View>


                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>


            <Pressable  onPress={() => setModalVisible(true)}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginTop: 40,
                    fontSize: 20
                }}>Send</Text>
            </Pressable>










        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#1B0B3B',
    },
    buttonClose: {
        backgroundColor: '#1B0B3B',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
export default Recieve