import { DefaultTheme, MD3LightTheme } from "react-native-paper";
import { COLORS } from "./colors";
import { fontConfig } from "./fonts";

export const createTheme = (mode = 'adaptive') => ({
    ...MD3LightTheme,
    mode,
    fonts: {
        ...MD3LightTheme.fonts,
        ...fontConfig,
    },
    colors: {
        ...MD3LightTheme.colors,

        white: COLORS.adaptive.white,
        black: COLORS.adaptive.black,

        primary: COLORS[mode as keyof typeof COLORS].primaryA,
        primaryContainer: COLORS[mode as keyof typeof COLORS].primaryB,
        accent: COLORS[mode as keyof typeof COLORS].accent,
        negative: COLORS[mode as keyof typeof COLORS].negative,
        warning: COLORS[mode as keyof typeof COLORS].warning,
        positive: COLORS[mode as keyof typeof COLORS].positive,

        contentAccent: COLORS[mode as keyof typeof COLORS].contentAccent,
        contentNegative: COLORS[mode as keyof typeof COLORS].contentNegative,
        contentWarning: COLORS[mode as keyof typeof COLORS].contentWarning,
        contentPositive: COLORS[mode as keyof typeof COLORS].contentPositive,

        contentPrimary: COLORS[mode as keyof typeof COLORS].contentPrimary,
        contentSecondary: COLORS[mode as keyof typeof COLORS].contentSecondary,
        contentTertiary: COLORS[mode as keyof typeof COLORS].contentTertiary,

        background: COLORS[mode as keyof typeof COLORS].background,
        backgroundSecondary: COLORS[mode as keyof typeof COLORS].backgroundSecondary,
        backgroundTertiary: COLORS[mode as keyof typeof COLORS].backgroundTertiary,

        borderOpaque: COLORS[mode as keyof typeof COLORS].borderOpaque,
        borderTransparent: COLORS[mode as keyof typeof COLORS].borderTransparent,
        borderSelected: COLORS[mode as keyof typeof COLORS].borderSelected,

        borderDisabled: COLORS[mode as keyof typeof COLORS].borderDisabled,
        borderAccent: COLORS[mode as keyof typeof COLORS].borderAccent,
        borderNegative: COLORS[mode as keyof typeof COLORS].borderNegative,
        borderWarning: COLORS[mode as keyof typeof COLORS].borderWarning,
        borderPositive: COLORS[mode as keyof typeof COLORS].borderPositive,
        borderAccentLight: COLORS[mode as keyof typeof COLORS].borderAccentLight,
    },
});

export const theme = createTheme('adaptive');


