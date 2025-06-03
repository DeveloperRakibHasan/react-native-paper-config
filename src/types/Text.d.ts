import { MD3TypescaleKey, TextProps as RNTextProps } from 'react-native-paper';

declare module 'react-native-paper' {
    interface TextProps extends RNTextProps {
        variant?: VariantProp<MD3TypescaleKey | 'headlineXSmall' | 'headlineXLarge' | 'headlineXXLarge' | 'displayXSmall' | 'labelXSmall' | 'bodyXSmall'>;
    }
}

export { TextProps };