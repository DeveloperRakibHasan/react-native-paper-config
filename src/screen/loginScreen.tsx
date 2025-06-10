import { View } from "react-native"
import { Text } from "react-native-paper"
import TextInput from "../components/UI/textInput/textInput";


const LoginScreen = () => {
    return (
        <View style={{ marginTop: 100, padding: 30 }}>
            <TextInput label="email" mode="outlined" />
            <TextInput label="Password" mode="outlined" type="password" />
            <Text variant="headlineLarge">Hello </Text>
        </View>
    )
}

export default LoginScreen;