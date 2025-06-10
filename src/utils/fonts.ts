import { Platform } from 'react-native';

export const fontsFamily = {
    // Add your font families here
    regular: Platform.select({
        ios: 'UberMoveRegular',
        android: 'UberMoveRegular',
    }),
    medium: Platform.select({
        ios: 'UberMoveMedium',
        android: 'UberMoveMedium',
    }),
    bold: Platform.select({
        ios: 'UberMoveBold',
        android: 'UberMoveBold',
    }),
};

// Usage example:
// import { fonts } from '../utils/fonts';
// const styles = StyleSheet.create({
//   text: {
//     fontFamily: fonts.regular,
//   },
// }); 