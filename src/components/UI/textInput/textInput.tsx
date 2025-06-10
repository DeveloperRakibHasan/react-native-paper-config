import { TextInputProps, TextInput as RNTextInput, Text, HelperText } from "react-native-paper";
import { StyleProp, TextStyle, View } from "react-native";
import { useAppTheme } from "../../../hooks/useAppTheme";
import { useState } from "react";
interface InputProps extends TextInputProps {
    label?: string;
    onChangeText?: (text: string) => void;
    style?: StyleProp<TextStyle>;
    clearIcon?: 'always' | 'while-editing' | 'unless-editing' | 'never';
    size?: 'small' | 'medium' | 'large';
    error?: boolean;
    type?: 'text' | 'password' | 'number';
}

const TextInput = ({
    label,
    onChangeText,
    style,
    clearIcon = 'never',
    size = 'medium',
    error = false,
    type = 'text',
    ...props
}: InputProps) => {
    const { colors } = useAppTheme()
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const height = size === 'small' ? 36 : size === 'medium' ? 48 : 56;
    const fontSize = size === 'small' ? 12 : size === 'medium' ? 16 : 20;

    const handleTextChange = (text: string) => {
        setInputValue(text);
        setIsFocused(text.length > 0);
        if (onChangeText) {
            onChangeText(text);
        }
    };

    const handleParentChange = (text: string) => {
        setInputValue(text);
        setIsFocused(text.length > 0);
    };

    const mergedOnChangeText = (text: string) => {
        if (type === 'number') {
            handleTextChange(text.replace(/[^0-9]/g, ''));
        } else {
            handleTextChange(text);
        }
    };

    return (
        <View style={{ width: '100%' }}>
            {label && <Text variant="labelSmall" style={{ marginBottom: 8 }}>{label}</Text>}
            <RNTextInput
                label={''}
                value={inputValue}
                onChangeText={mergedOnChangeText}
                clearButtonMode={clearIcon}
                secureTextEntry={type === 'password' ? !showPassword : false}
                keyboardType={type === 'number' ? 'numeric' : 'default'}
                style={[style, { height, fontSize }]}
                underlineColor={colors.white}
                underlineStyle={{ backgroundColor: colors.white }}
                outlineStyle={{
                    borderWidth: 2,
                    borderColor: error ? colors.error : isFocused ? colors.black : 'transparent',
                    borderRadius: 8,
                    backgroundColor: isFocused ? colors.white : colors.backgroundTertiary,
                }}
                right={
                    type === 'password' &&
                    <RNTextInput.Icon
                        icon={showPassword ? 'eye-off' : 'eye'}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(inputValue.length > 0)}
                {...props}
            />
            <HelperText type={'error'} visible={error}>
                Email is required!
            </HelperText>
        </View>
    )
}

export default TextInput;