import { ReactNode } from "react";
import { Appearance, StyleSheet, View, ViewStyle } from "react-native";

interface NoSafeAreaView {
    children: ReactNode,
    style?: ViewStyle
}

const NoSafeAreaView: React.FC<NoSafeAreaView> = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}
export default NoSafeAreaView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Appearance.getColorScheme() === 'dark' ? '#FFFFFF' : '#FFFFFF',
    }
})
