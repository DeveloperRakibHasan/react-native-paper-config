import React from 'react';
import {
  View,
} from 'react-native';
import { useAppTheme } from './src/hooks/useAppTheme';
import TextInput from './src/components/UI/textInput/textInput';

function App(): React.JSX.Element {
  const { colors } = useAppTheme()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: 20,
      }}>
      <TextInput
        mode='outlined'
        label='Email'
        clearIcon='always'
        placeholder='Enter your email'
        style={{ width: '100%' }}
        error={false}
      />
      <TextInput
        mode='outlined'
        label='Email'
        clearIcon='always'
        placeholder='Enter your email'
        style={{ width: '100%' }}
        error={false}
      />
    </View>
  );
}

export default App;
