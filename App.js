import React, { useContext } from "react";
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext, AuthProvider } from "./components/AuthContext";
import GetStarted from "./GetStarted";
import Wait from "./wait";
import LogIn from "./LogIn";
import MainScreen from "./MainScreen";

function Splashscreen({ navigation }) {
    setTimeout(() => {
        navigation.replace('login')
    }, 2000)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
            <StatusBar barStyle='light-content' hidden={false} />
            <Image source={require('./images/splash.png')} />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    const { userToken, isLoading } = useContext(AuthContext);

    // Display a splash screen while the isLoading state is true
    if (isLoading) {
        return <Wait />;
    }

    return (
        <NavigationContainer>
            {userToken ? <MainScreen /> : <LogIn />}
        </NavigationContainer>
    );
}

export default () => {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    );
};
