
import BgImage from '../assets/images/bg-image.jpg';
import Logo from '../assets/svgs/rooftopsaunas-logo-white.svg';
import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { screenWidth } from '../utils/scaling';

const SplashScreen: FC = () => {

    return (
        <View style={styles.container}>
            <Image source={BgImage} style={styles.bgImage} />
            <View style={styles.bgOverlay}></View>
            {/* <Logo style={styles.logoImage} /> */}
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
});
