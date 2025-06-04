import React from 'react';
import {
    Animated,
    Easing,
    StyleProp,
    View,
    ViewStyle
} from 'react-native';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md' }) => {
    const spinAnim = React.useRef(new Animated.Value(0)).current;

    // Start the animation loop immediately (not inside useEffect)
    Animated.loop(
        Animated.timing(spinAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start();

    const sizeValues = {
        sm: 16,
        md: 32,
        lg: 48,
        xl: 64,
    };

    const spinnerSize = sizeValues[size];

    const rotate = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const containerStyle: StyleProp<ViewStyle> = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const spinnerStyle: StyleProp<ViewStyle> = {
        width: spinnerSize,
        height: spinnerSize,
        borderWidth: 3,
        borderColor: '#fff',
        borderTopColor: '#3b82f6',
        borderRightColor: '#3b82f6',
        borderRadius: spinnerSize / 2,
    };

    return (
        <View style={containerStyle}>
            <Animated.View style={[spinnerStyle, { transform: [{ rotate }] }]} />
        </View>
    );
};

export default LoadingSpinner;
