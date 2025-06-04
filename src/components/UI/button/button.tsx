import { ActivityIndicator, Button as PaperButton } from "react-native-paper";
import { useAppTheme } from "../../../hooks/useAppTheme";
import { buttonSizeConfig } from "../../../config/buttons";
import { COLORS } from "../../../config/colors";
import { Pressable } from "react-native";
import { useState } from "react";

interface ButtonProps {
    children: React.ReactNode;
    onPress?: () => void;
    mode?: "contained" | "outlined" | "text";
    type?: "primary" | "secondary" | "tertiary" | "warning" | "error" | "positive";
    style?: any;
    size?: "xSmall" | "small" | "medium" | "large";
    shape?: "rounded" | "square";
    rest?: any;
    loading?: boolean;
    disabled?: boolean;
    block?: boolean;
}

const Button = ({
    children,
    onPress,
    style,
    mode = "contained",
    type = "primary",
    size = "medium",
    shape = "square",
    loading = false,
    disabled = false,
    block = false,
    ...rest
}: ButtonProps) => {
    const { colors } = useAppTheme()
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => setIsPressed(true);
    const handlePressOut = () => setIsPressed(false);

    const backgroundColor = isPressed
        ? type === 'primary' ? '#333333' : '#D5D5D5'
        : type === "secondary"
            ? colors.backgroundTertiary
            : (colors[type as keyof typeof colors] as string);

    const textColor = type === "secondary" ? colors.contentPrimary : colors.white;

    return (
        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} style={{ width: '100%' }}>
            <PaperButton
                mode={mode}
                theme={{
                    colors: {
                        primary: backgroundColor,
                        onPrimary: textColor,
                    },
                    fonts: {
                        labelLarge: {
                            fontSize: buttonSizeConfig[size as keyof typeof buttonSizeConfig].fontSize,
                            fontWeight: buttonSizeConfig[size as keyof typeof buttonSizeConfig].fontWeight,
                            lineHeight: buttonSizeConfig[size as keyof typeof buttonSizeConfig].lineHeight,
                        }
                    } as any
                }}
                onPress={onPress}
                style={[
                    {
                        borderRadius: shape === "rounded" ? 100 : 8,
                        width: block ? "100%" : "auto",
                    },
                    style
                ]}
                loading={false}
                disabled={disabled}
                {...rest}>
                {loading ? <ActivityIndicator color={colors.accent} size='small' /> : children}
            </PaperButton>
        </Pressable>
    )
}

export default Button;