
import BgImage from '../assets/images/bg-image.jpg';
import Logo from '../assets/svgs/rooftopsaunas-logo-white.svg';
import React, { FC, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { screenWidth } from '../utils/scaling';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';

const SplashScreen: FC = () => {
    const navigation = useNavigation();

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate('loginScreen' as never);
    //     }, 1000);
    // }, []);

    return (
        <View style={styles.container}>
            <Image source={BgImage} style={styles.bgImage} />
            <View style={styles.bgOverlay}></View>
            {/* <Logo style={styles.logoImage} /> */}
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>FIND YOUR CALM</Text>
            </View>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
    },
    bgImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode: 'cover',
        zIndex: 0,
    },
    bgOverlay: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    logoImage: {
        width: screenWidth * 0.7,
        height: screenWidth * 0.7,
        zIndex: 2,
    },
    logoContainer: {
        position: 'absolute',
        bottom: 85,
        left: 0,
        right: 0,
        zIndex: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        color: 'white',
        fontSize: 13,
        lineHeight: 18,
        letterSpacing: 6,
        fontWeight: 'normal',
    },
});
