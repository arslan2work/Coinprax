import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Logo from '../assets/logo.png'
import stars from '../assets/stars.png'
import LandingPage from "./LandingPage";
import GetStarted from "./GetStarted";
import gif from '../assets/giphy.gif'


export default function SplashScreen() {

    const edges = useSafeAreaInsets();

    const startAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setTimeout(() => {
            Animated.sequence([
                Animated.timing(
                    startAnimation,
                    {
                        toValue: -Dimensions.get('window').height,
                        delay: 100000,
                        useNativeDriver: true
                    }
                )
            ])
            .start();
        })
    })
    




    const BGColor = "#1B0B3B"

    return (
        <View style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }}>
            <Animated.View style={{
                backgroundColor: BGColor,
                flex: 1,
                zIndex: 1,
                transform: [
                    {translateY: startAnimation}
                ]
            }}>
                <Image source={gif} style={{
                    width: '100%',
                    height: '100%',
                    position: "absolute"
                }} />

                <Animated.View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                }}>
                    <Image source={Logo} style={{
                        height: 200,
                        width: 200,
                        resizeMode: "contain",
                    }}/>
                    <Text style={{
                        fontSize: 42,
                        fontWeight: "bold",
                        color: 'white'
                    }}>Coinprax</Text>
                </Animated.View>
            </Animated.View>

            <Animated.View style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: BGColor,
                zIndex: 0
            }}>
            <GetStarted />

            </Animated.View>

        </View>
    );
}