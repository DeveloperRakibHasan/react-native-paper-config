import React from 'react';
import {
  View,
} from 'react-native';
import { useAppTheme } from './src/hooks/useAppTheme';
import Button from './src/components/UI/button/button';

function App(): React.JSX.Element {
  const { colors } = useAppTheme()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background, padding: 20 }}>
      <Button
        mode="contained"
        type='primary'
        size='small'
        block
      >
        Label
      </Button>
    </View>
  );
}

export default App;
